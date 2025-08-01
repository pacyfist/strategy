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
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly firestore = inject(Firestore);

  readonly languageFilter = signal('pl');
  readonly textFilter = signal<string>('');
  readonly pageNumber = signal<number>(0);
  readonly pageSize = signal<number>(6);

  private readonly blogsPages$ = toObservable(this.languageFilter).pipe(
    switchMap((language) =>
      collectionData(
        query(
          collection(this.firestore, '/blog'),
          where('lang', '==', language),
        ),
        {
          idField: 'id',
        },
      ),
    ),
    map((blogArticles) => {
      return blogArticles.map(
        (blogArticle) =>
          ({
            ...blogArticle,
            created: blogArticle['created'].toDate(),
          }) as IBlogArticle,
      );
    }),
  );

  readonly blogArticles = toSignal(this.blogsPages$);

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
}

interface IBlogArticle {
  id: string;
  path: string;
  image: {
    url: string;
    alt: string;
  };
  title: string;
  lead: string;
  created: Date;
}
