import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// Angular SSR (v20): default export must be a function that accepts a
// BootstrapContext (e.g., { platformRef }) and returns Promise<ApplicationRef>.
export default function bootstrap(context: any) {
	return bootstrapApplication(App, config, context);
}
