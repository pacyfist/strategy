import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogArticleComponent } from './pages/blog-article/blog-article.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/:id', component: BlogArticleComponent },
  { path: 'books', component: BooksPageComponent },
  { path: 'books/:id', component: BookPageComponent },
];
