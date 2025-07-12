import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:id', component: BlogPageComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookPageComponent },
  { path: 'privacy', component: PrivacyPageComponent },
  { path: 'login', component: LoginPageComponent },
];
