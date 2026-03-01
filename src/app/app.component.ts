import { Component, OnInit, inject } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .main-content {
      min-height: calc(100vh - 200px);
    }
  `]
})
export class AppComponent implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private router = inject(Router);

  ngOnInit(): void {
    // Update page title and meta tags on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const routeData = this.router.routerState.root.firstChild?.data as any;
        const title = routeData?.['title'] || 'TGS Growth Studio';
        this.titleService.setTitle(title);
        
        this.metaService.updateTag({
          name: 'description',
          content: 'TGS Growth Studio - Building businesses from ideation to scale. We combine strategy, technology, and execution to help entrepreneurs succeed.'
        });
      });
  }
}
