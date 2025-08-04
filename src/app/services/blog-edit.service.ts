import {
  computed,
  effect,
  inject,
  Injectable,
  signal,
  untracked,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogEditService {
  readonly firestore = inject(Firestore);

  readonly blogCollection = collection(this.firestore, '/blog');
  readonly blogDataCollection = collection(this.firestore, '/blogData');

  async addArticle(id: string, article: IArticle, data: IArticleData) {
    await setDoc(doc(this.firestore, 'blog', id), {
      lang: article.lang,
      path: article.path,
      title: article.title,
      lead: article.lead,
    } as IArticle);
    await setDoc(doc(this.firestore, 'blogData', id), {
      html: data.html,
    } as IArticleData);
  }

  async delArticle(id: string) {
    await deleteDoc(doc(this.firestore, `/blog`, id));
    await deleteDoc(doc(this.firestore, `/blogData`, id));
  }
}

interface IArticle {
  lang: string;
  path: string;
  title: string;
  lead: string;
}

interface IArticleData {
  html: string;
}
