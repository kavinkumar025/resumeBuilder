import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { createRequire } from 'node:module';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// Basic export endpoint placeholder; swap to real renderer (e.g., Playwright/Puppeteer) later
app.use(express.json({ limit: '1mb' }));
app.post('/api/export/pdf', async (req, res) => {
  const html: string | undefined = req.body?.html;
  if (!html) return res.status(400).json({ error: 'Missing html' });
  try {
    const require = createRequire(import.meta.url);
    let mod: any = null;
    try { mod = require('playwright'); } catch { /* not installed */ }
    if (!mod || !mod.chromium) {
      return res.status(501).json({ error: 'Playwright not installed' });
    }
    const browser = await mod.chromium.launch({ args: ['--no-sandbox'], headless: true });
    const page = await browser.newPage({ viewport: { width: 794, height: 1123 } }); // ~A4 @96dpi
    await page.setContent(html, { waitUntil: 'load' });
  const pdf = await page.pdf({ format: 'A4', printBackground: true, margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' } });
    await browser.close();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');
    return res.status(200).send(Buffer.from(pdf));
  } catch (e) {
    console.error('PDF export error', e);
    return res.status(500).json({ error: 'Export failed' });
  }
});

// AI endpoints placeholders: integrate with your provider (OpenAI, Azure, etc.)
async function openAIGenerate(system: string, user: string): Promise<string | null> {
  const key = process.env['OPENAI_API_KEY'];
  const base = process.env['OPENAI_BASE'] || 'https://api.openai.com/v1';
  const model = process.env['OPENAI_MODEL'] || 'gpt-4o-mini';
  if (!key) return null;
  const resp = await fetch(`${base}/chat/completions`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, messages: [{ role: 'system', content: system }, { role: 'user', content: user }], temperature: 0.4 })
  });
  if (!resp.ok) return null;
  const json = await resp.json();
  return json?.choices?.[0]?.message?.content || null;
}

app.post('/api/ai/improve', async (req, res) => {
  const text: string = req.body?.text || '';
  const tone: string = req.body?.tone || 'professional';
  const system = `You are an assistant that improves resume bullets and summaries to be concise, action-oriented, and ${tone}.`;
  const user = `Improve this resume text, keep it one paragraph or a short bullet-form list and avoid fluff:\n\n${text}`;
  const out = await openAIGenerate(system, user);
  return res.json({ text: out || `Improved: ${text}` });
});
app.post('/api/ai/quantify', async (req, res) => {
  const text: string = req.body?.text || '';
  const system = 'You add quantifiable metrics and impact to resume bullets, ensuring plausibility and brevity.';
  const user = `Rewrite this bullet(s) by adding plausible metrics (%, $, counts) and outcomes, keep it concise:\n\n${text}`;
  const out = await openAIGenerate(system, user);
  return res.json({ text: out || `${text} (quantified with metrics)` });
});
app.post('/api/ai/tailor', async (req, res) => {
  const text: string = req.body?.text || '';
  const jd: string = req.body?.jobDescription || '';
  const tone: string = req.body?.tone || 'professional';
  const system = `You tailor resume content to a job description. Keep tone ${tone}, concise, ATS-friendly, using keywords.`;
  const user = `Job Description:\n${jd}\n\nResume content to tailor:\n${text}\n\nReturn improved content with JD keywords woven naturally.`;
  const out = await openAIGenerate(system, user);
  if (!out) {
    const words = jd.split(/\s+/).slice(0, 5).join(' ');
    return res.json({ text: `${text}\n\nTailored for: ${words}` });
  }
  return res.json({ text: out });
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
