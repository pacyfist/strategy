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
  collection,
  collectionData,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { combineLatest, map, switchMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly firestore = inject(Firestore);

  private readonly auth = inject(AuthService);

  readonly languageFilter = signal('pl');
  readonly textFilter = signal<string>('');
  readonly pageNumber = signal<number>(0);
  readonly pageSize = signal<number>(6);

  private readonly blogsArticles$ = combineLatest([
    toObservable(this.languageFilter),
    toObservable(this.auth.isUserAdmin),
  ]).pipe(
    switchMap(([language, isAdmin]) => {
      return collectionData(
        query(
          collection(this.firestore, '/blog'),
          where('lang', '==', language),
          ...(isAdmin ? [] : [where('published', '<=', new Date())]),
        ),
        { idField: 'id' },
      );
    }),
    map((blogArticles) => {
      return blogArticles.map(
        (blogArticle) =>
          ({
            ...blogArticle,
          }) as IArticle,
      );
    }),
  );

  readonly blogArticles = toSignal(this.blogsArticles$);

  private readonly filteredPages = computed(() => {
    const search = this.textFilter().toLowerCase();
    return (
      this.blogArticles()?.filter(
        (item) =>
          item.title.toLowerCase().includes(search) ||
          item.lead.toLowerCase().includes(search),
      ) ?? []
    );
  });

  private readonly pageStart = computed(
    () => this.pageNumber() * this.pageSize(),
  );
  private readonly pageFinish = computed(
    () => this.pageStart() + this.pageSize(),
  );

  readonly page = computed(() =>
    this.filteredPages().slice(this.pageStart(), this.pageFinish()),
  );

  readonly pageCount = computed(() =>
    Math.ceil(this.filteredPages().length / this.pageSize()),
  );

  constructor() {
    // Ensure the page number is within the valid range
    effect(() => {
      const pageCount = this.pageCount();

      untracked(() => {
        const currentPage = this.pageNumber();
        const lastPage = pageCount - 1;
        if (currentPage < 0) {
          this.pageNumber.set(0);
        }
        if (currentPage > lastPage) {
          this.pageNumber.set(lastPage);
        }
      });
    });
  }

  async getArticleByPath(path: string) {
    const articlesSnapshot = await getDocs(
      query(collection(this.firestore, '/blog'), where('path', '==', path)),
    );
    if (articlesSnapshot.empty) {
      return null;
    }
    const docSnap = articlesSnapshot.docs[0];
    const article = { ...docSnap.data() } as IArticle;

    const dataDoc = await getDoc(doc(this.firestore, `/blogData`, docSnap.id));
    return {
      article,
      data: dataDoc.data() as IArticleData,
    };
  }
}

interface IArticle {
  id: string;
  lang: string;
  path: string;
  title: string;
  lead: string;
}

interface IArticleData {
  html: string;
}
