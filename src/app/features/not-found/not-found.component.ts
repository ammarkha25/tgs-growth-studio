import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="min-h-[60vh] flex items-center justify-center py-24 px-4">
      <div class="text-center">
        <h1 class="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 class="text-4xl font-bold text-slate-900 dark:text-white mb-4">Page Not Found</h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md">
          It seems like the page you're looking for doesn't exist or has been moved.
        </p>
        <a routerLink="/" class="btn-primary inline-block px-8 py-3">
          Back to Home
        </a>
      </div>
    </section>
  `,
  styles: []
})
export class NotFoundComponent {}
