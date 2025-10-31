import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ExportService {
  async exportPdf(html: string): Promise<Blob> {
    try {
      const res = await fetch('/api/export/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html })
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      const blob = await res.blob();
      return blob;
    } catch (e) {
      throw e as Error;
    }
  }
}
