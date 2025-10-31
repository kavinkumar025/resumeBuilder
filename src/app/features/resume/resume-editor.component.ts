import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { SplitPaneComponent } from '../../shared/components/split-pane/split-pane.component';
import { SidePanelComponent } from '../../shared/components/side-panel/side-panel.component';
import { AtsCheckComponent } from './ats-check.component';
import { TemplateMiniPickerComponent } from '@shared/components/template-mini-picker/template-mini-picker.component';
import { TemplateRendererComponent } from '../../shared/components/template-renderer/template-renderer.component';
import { AiService } from '@core/services/ai.service';
import { ResumeStateService } from '@core/services/resume-state.service';

@Component({
  selector: 'app-resume-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTabsModule, MatListModule, MatCheckboxModule, DragDropModule, MatSnackBarModule, PageHeaderComponent, SplitPaneComponent, SidePanelComponent, AtsCheckComponent, TemplateMiniPickerComponent, TemplateRendererComponent],
  templateUrl: './resume-editor.component.html',
  styleUrls: ['./resume-editor.component.scss']
})
export class ResumeEditorComponent {
  form!: FormGroup;
  private ai = inject(AiService);
  private state = inject(ResumeStateService);
  sectionsOrder = this.state.getSectionsOrder().slice();
  sectionsMap = this.state.getSections();
  isBusyImprove = false; isBusyQuantify = false; isBusyTailor = false;
  constructor(private fb: FormBuilder, private snack: MatSnackBar) {
    this.form = this.fb.group({
      headline: [''],
      summary: [''],
      skills: [''],
      jobDescription: [''],
      experience: this.fb.array([])
    });
    // Update state content and JD when form changes (basic concat as content)
    this.form.valueChanges.subscribe(val => {
      const skillsArr = (val.skills as string || '').split(',').map(s=>s.trim()).filter(Boolean);
      const draft = {
        title: val.headline || '',
        summary: val.summary || '',
        skills: skillsArr,
        experience: (val.experience || []).map((e:any)=>({ company: e.company, role: e.role, bullets: e.bullets||[] }))
      };
      this.state.setDraft(draft);
      this.state.setContent([draft.title, draft.summary, skillsArr.join(', ')].filter(Boolean).join('\n'));
      this.state.setJobDescription(val.jobDescription || '');
    });
  }

  get skillsArray(): string[] {
    const raw = (this.form?.value?.skills || '') as string;
    return raw.split(',').map(s => s.trim()).filter(Boolean);
  }

  improveSummary(){
    const text = this.form.get('summary')?.value || '';
    this.isBusyImprove = true;
    this.ai.improveText(text).subscribe({
      next: t => this.form.get('summary')?.setValue(t),
      error: () => this.snack.open('Failed to improve summary','Close',{ duration: 3000 }),
      complete: () => { this.isBusyImprove = false; }
    });
  }
  quantifySummary(){
    const text = this.form.get('summary')?.value || '';
    this.isBusyQuantify = true;
    this.ai.quantifyText(text).subscribe({
      next: t => this.form.get('summary')?.setValue(t),
      error: () => this.snack.open('Failed to quantify summary','Close',{ duration: 3000 }),
      complete: () => { this.isBusyQuantify = false; }
    });
  }
  tailorSummary(){
    const text = this.form.get('summary')?.value || '';
    const jd = this.form.get('jobDescription')?.value || '';
    this.isBusyTailor = true;
    this.ai.tailorToJob(text, jd).subscribe({
      next: t => this.form.get('summary')?.setValue(t),
      error: () => this.snack.open('Failed to tailor summary','Close',{ duration: 3000 }),
      complete: () => { this.isBusyTailor = false; }
    });
  }

  // Experience helpers
  get experience(): FormArray { return this.form.get('experience') as FormArray; }
  experienceGroup(initial?: any){
    return this.fb.group({
      company: [initial?.company || ''],
      role: [initial?.role || ''],
      bullets: this.fb.array((initial?.bullets || ['']).map((b: string) => this.fb.control(b)))
    });
  }
  addExperience(){ this.experience.push(this.experienceGroup()); }
  removeExperience(i: number){ this.experience.removeAt(i); }
  bulletsAt(expIndex: number): FormArray { return this.experience.at(expIndex).get('bullets') as FormArray; }
  addBullet(expIndex: number){ this.bulletsAt(expIndex).push(new FormControl('')); }
  removeBullet(expIndex: number, bulletIndex: number){ this.bulletsAt(expIndex).removeAt(bulletIndex); }
  dropBullet(expIndex: number, ev: CdkDragDrop<FormControl[]>) {
    moveItemInArray(this.bulletsAt(expIndex).controls, ev.previousIndex, ev.currentIndex);
  }
  bulletCtrl(expIndex: number, idx: number): FormControl { return this.bulletsAt(expIndex).at(idx) as FormControl; }
  improveBullet(expIndex: number, bulletIndex: number){
    const ctrl = this.bulletsAt(expIndex).at(bulletIndex) as FormControl;
    this.ai.improveText(ctrl.value || '').subscribe({ next: t => ctrl.setValue(t), error: () => this.snack.open('Failed to improve bullet','Close',{ duration: 3000 }) });
  }
  quantifyBullet(expIndex: number, bulletIndex: number){
    const ctrl = this.bulletsAt(expIndex).at(bulletIndex) as FormControl;
    this.ai.quantifyText(ctrl.value || '').subscribe({ next: t => ctrl.setValue(t), error: () => this.snack.open('Failed to quantify bullet','Close',{ duration: 3000 }) });
  }
  tailorBullet(expIndex: number, bulletIndex: number){
    const ctrl = this.bulletsAt(expIndex).at(bulletIndex) as FormControl;
    const jd = this.form.get('jobDescription')?.value || '';
    this.ai.tailorToJob(ctrl.value || '', jd).subscribe({ next: t => ctrl.setValue(t), error: () => this.snack.open('Failed to tailor bullet','Close',{ duration: 3000 }) });
  }

  toggleSection(key: string, enabled: boolean){
    this.sectionsMap = { ...this.sectionsMap, [key]: enabled };
    this.state.toggleSection(key, enabled);
  }
  dropSection(ev: CdkDragDrop<string[]>) {
    moveItemInArray(this.sectionsOrder, ev.previousIndex, ev.currentIndex);
    this.state.setSectionsOrder(this.sectionsOrder);
  }
}
