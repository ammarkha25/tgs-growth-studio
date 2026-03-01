import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { IndustriesComponent } from './features/industries/industries.component';
import { ProcessComponent } from './features/process/process.component';
import { AboutComponent } from './features/about/about.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home - TGS Growth Studio' }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { title: 'Portfolio - TGS Growth Studio' }
  },
  {
    path: 'industries',
    component: IndustriesComponent,
    data: { title: 'Industries - TGS Growth Studio' }
  },
  {
    path: 'process',
    component: ProcessComponent,
    data: { title: 'Process - TGS Growth Studio' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About Us - TGS Growth Studio' }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404 - Page Not Found' }
  }
];
