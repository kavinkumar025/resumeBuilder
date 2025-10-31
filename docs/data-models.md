# Data models (frontend contracts)

## User
```ts
type Plan = 'free' | 'pro' | 'premium' | 'admin';
interface UserProfile {
  uid: string;
  email: string;
  name?: string;
  phone?: string;
  location?: string;
  plan: Plan;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}
```

## Resume
```ts
interface ResumeBlockBase { id: string; }
interface ExperienceBlock extends ResumeBlockBase {
  company: string; role: string; startDate: string; endDate?: string; bullets: string[];
}
interface EducationBlock extends ResumeBlockBase {
  school: string; degree: string; startDate: string; endDate?: string; details?: string[];
}
interface ProjectBlock extends ResumeBlockBase {
  name: string; link?: string; bullets: string[];
}
interface ResumeDraft {
  id: string;
  uid: string;
  title: string; // e.g., Product Manager (Fintech)
  summary?: string;
  experience: ExperienceBlock[];
  education: EducationBlock[];
  projects?: ProjectBlock[];
  skills?: string[];
  certifications?: string[];
  templateId: string;
  jobDescription?: string; // pasted JD for tailoring
  ats?: { score: number; keywordsCovered: string[]; warnings: string[] };
  updatedAt: string;
}
```

## Template
```ts
interface TemplateMeta {
  id: string;
  name: string;
  thumbnailUrl: string;
  tags: string[]; // ats-safe, modern, creative
  premium?: boolean;
}
```

## Job + Tracker
```ts
interface JobItem { id: string; title: string; company: string; location?: string; url: string; postedAt?: string; }
type ApplicationStatus = 'saved' | 'applied' | 'interview' | 'offer' | 'rejected';
interface TrackerRow { id: string; jobId: string; title: string; company: string; appliedAt?: string; status: ApplicationStatus; notes?: string; }
```
