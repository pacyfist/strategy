import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'blog', component: BlogPageComponent },
];
