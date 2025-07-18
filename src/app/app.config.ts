// app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch  } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Ensure correct path

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch ()), // ✅ Makes HttpClient available globally
    provideRouter(routes), // ✅ Enables router if using routing
  ],
};
