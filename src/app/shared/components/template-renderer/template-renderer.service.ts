import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TemplateRenderService {
  renderHtml(draft: any, templateId: number | null, accent: string): string {
    const tpl = Number(templateId || 1);
    const css = this.cssFor(tpl, accent);
    const body = this.bodyFor(tpl, draft);
    return `<!doctype html><html><head><meta charset="utf-8"/><style>${css}</style></head><body>${body}</body></html>`;
  }

  private cssFor(id: number, accent: string): string {
    const base = `:root{--accent:${accent||'#2563eb'};--text:#111827;--muted:#6b7280}
    body{font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif;color:var(--text);}
    .page{width:794px;min-height:1123px;box-sizing:border-box;padding:32px 40px}
    h1{margin:0 0 4px;font-size:28px}
    h2{margin:12px 0 4px;font-size:14px;color:var(--accent);text-transform:uppercase;letter-spacing:.06em}
    .muted{color:var(--muted)}
    ul{margin:6px 0 12px;padding-left:18px}
    li{margin:4px 0}
    .chip{display:inline-block;border:1px solid #e5e7eb;border-radius:999px;padding:2px 8px;margin:2px}
    `;
    const classic = `.page{border-top:6px solid var(--accent)} .header{border-bottom:1px solid #e5e7eb;padding-bottom:8px;margin-bottom:10px}`;
    const modern = `.page{border-left:6px solid var(--accent)} .name{color:var(--accent)}`;
    const compact = `.page{border:1px solid #e5e7eb;border-top-color:var(--accent)}`;
    const map: Record<number,string> = {1:classic,2:modern,3:compact};
    return base + (map[id] || classic);
  }

  private bodyFor(id: number, draft: any): string {
    const name = draft?.title || 'Your Headline';
    const summary = draft?.summary || 'Professional summary goes here.';
    const skills: string[] = draft?.skills || [];
    const exps: any[] = draft?.experience || [];
    const skillsHtml = skills.length ? `<div class="skills">${skills.map(s=>`<span class="chip">${this.escape(s)}</span>`).join('')}</div>` : '';
    const expHtml = exps.map(e => `
      <div class="exp">
        <div class="role"><strong>${this.escape(e.role||'')}</strong> @ ${this.escape(e.company||'')}</div>
        <ul>${(e.bullets||[]).map((b:string)=>`<li>${this.escape(b)}</li>`).join('')}</ul>
      </div>`).join('');
    return `<div class="page">
      <div class="header"><h1 class="name">${this.escape(name)}</h1></div>
      <section><h2>Summary</h2><div class="muted">${this.escape(summary)}</div></section>
      <section><h2>Experience</h2>${expHtml || '<div class="muted">Add experience</div>'}</section>
      <section><h2>Skills</h2>${skillsHtml || '<div class="muted">Add skills</div>'}</section>
    </div>`;
  }

  private escape(s: string){
    return (s||'').replace(/[&<>"]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c] as string));
  }
}
