import { inject, Injectable } from '@angular/core';
import {
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class BlogEditService {
  private readonly firestore = inject(Firestore);

  async addArticle(article: IArticle, data: IArticleData) {
    const guid = crypto.randomUUID();
    await setDoc(doc(this.firestore, 'blog', guid), {
      lang: article.lang,
      path: article.path,
      title: article.title,
      lead: article.lead,
    } as IArticle);
    await setDoc(doc(this.firestore, 'blogData', guid), {
      html: data.html,
    } as IArticleData);
  }

  async delArticle(id: string) {
    await deleteDoc(doc(this.firestore, `/blog`, id));
    await deleteDoc(doc(this.firestore, `/blogData`, id));
  }

  async getArticleById(id: string) {
    const articleSnapshot = await getDoc(doc(this.firestore, `/blog`, id));
    const articleDataSnapshot = await getDoc(
      doc(this.firestore, `/blogData`, id),
    );

    return {
      article: articleSnapshot.data() as IArticle,
      data: articleDataSnapshot.data() as IArticleData,
    };
  }

  async publishArticle(id: string, published: Date) {
    await setDoc(
      doc(this.firestore, 'blog', id),
      { published },
      { merge: true },
    );
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
