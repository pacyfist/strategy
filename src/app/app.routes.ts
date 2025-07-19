import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { LogoutPageComponent } from './pages/account/logout-page/logout-page.component';
import { BlogPageComponent } from './pages/blog/blog-page/blog-page.component';
import { BlogListPageComponent } from './pages/blog/blog-list-page/blog-list-page.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'blog', component: BlogListPageComponent },
  {
    path: 'blog/edit',
    loadComponent: () =>
      import('./pages/blog/blog-list-edit/blog-list-edit.component').then(
        (i) => i.BlogListEditComponent,
      ),
  },
  { path: 'blog/:id', component: BlogPageComponent },
  {
    path: 'blog/:id/edit',
    loadComponent: () =>
      import('./pages/blog/blog-page-edit/blog-page-edit.component').then(
        (i) => i.BlogPageEditComponent,
      ),
  },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookPageComponent },
  { path: 'privacy', component: PrivacyPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'logout', component: LogoutPageComponent },
];
