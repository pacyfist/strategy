import {
  computed,
  effect,
  inject,
  Injectable,
  signal,
  untracked,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  collection,
  collectionData,
  Firestore,
  orderBy,
  query,
} from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  readonly firestore = inject(Firestore);

  readonly blogsCollectionRef = collection(this.firestore, '/blogs');

  readonly blogs$ = collectionData(this.blogsCollectionRef, {
    idField: 'id',
  }).pipe(
    map((blogs) => {
      return blogs.map(
        (blog) => ({ ...blog, created: blog['created'].toDate() }) as IBlog,
      );
    }),
  );
  readonly blogs = toSignal(this.blogs$);

  readonly filter = signal<string>('');

  readonly data = computed(() => {
    const search = this.filter().toLowerCase();

    return (
      this.blogs()?.filter(
        (item) =>
          item.title.toLowerCase().includes(search) ||
          item.lead.toLowerCase().includes(search),
      ) ?? []
    );
  });

  readonly pageNumber = signal<number>(0);
  readonly pageSize = signal<number>(6);

  private readonly pageStart = computed(
    () => this.pageNumber() * this.pageSize(),
  );
  private readonly pageFinish = computed(
    () => this.pageStart() + this.pageSize(),
  );

  readonly page = computed(() =>
    this.data().slice(this.pageStart(), this.pageFinish()),
  );

  readonly pageCount = computed(() =>
    Math.ceil(this.data().length / this.pageSize()),
  );

  getArticleSections(id: string): Observable<ISection[]> {
    return collectionData(
      query(
        collection(this.firestore, `/blogs/${id}/sections/`),
        orderBy('index', 'asc'),
      ),
    ) as Observable<ISection[]>;
  }

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

interface IBlog {
  id: string;
  image: {
    url: string;
    alt: string;
  };
  title: string;
  lead: string;
  created: Date;
  section: ISection[];
}

interface ISection {
  index: number;
  title: string;
  html: string;
}
