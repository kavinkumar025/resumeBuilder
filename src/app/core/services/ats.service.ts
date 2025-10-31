import { Injectable } from '@angular/core';

export interface AtsResult {
  score: number;
  keywordsCovered: string[];
  warnings: string[];
}

@Injectable({ providedIn: 'root' })
export class AtsService {
  check(content: string, jobDescription?: string): AtsResult {
    const text = (content || '').toLowerCase();
    const jd = (jobDescription || '').toLowerCase();
    const warnings: string[] = [];

    // Keyword coverage (very basic):
    const jdKeywords = this.extractKeywords(jd);
    const covered = jdKeywords.filter(k => text.includes(k));

    // Generic warnings
    if (text.length > 5000) warnings.push('Content might be too long; target one page if possible.');
    if (/(photo|image|icon)/.test(text)) warnings.push('Avoid images/icons; ATS may not parse them.');
    if (!/- |•|\n\d+\./.test(text)) warnings.push('Use bullet points for responsibilities and achievements.');

    // Score heuristic
    const coverage = jdKeywords.length ? Math.round((covered.length / jdKeywords.length) * 100) : 60;
    const lengthPenalty = Math.min(20, Math.max(0, Math.floor((text.length - 3500) / 150)));
    const score = Math.max(10, Math.min(100, coverage - lengthPenalty));

    return { score, keywordsCovered: covered, warnings };
  }

  private extractKeywords(jd: string): string[] {
    if (!jd) return [];
    // crude extraction: keep words 4-20 chars, drop stopwords; unique
    const stop = new Set(['with','that','this','from','have','will','your','into','about','their','which','were','been','they','them','then','than','over','under','such','also','able','more','most','least','very','much','many','some','any','and','for','the','are','you','our','per','etc','via','who','what','when','where','how','why','work','role','team','job','position']);
    const tokens = jd
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 4 && w.length <= 20 && !stop.has(w));
    return Array.from(new Set(tokens)).slice(0, 50);
  }
}
