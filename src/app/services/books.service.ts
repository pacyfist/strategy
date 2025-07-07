import {
  computed,
  effect,
  inject,
  Injectable,
  signal,
  untracked,
} from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  readonly firestore = inject(Firestore);

  readonly booksCollectionRef = collection(this.firestore, 'books');

  readonly books$ = collectionData(this.booksCollectionRef, {
    idField: 'id',
  }) as Observable<IBook[]>;
  readonly books = toSignal(this.books$);

  readonly filter = signal<string>('');

  readonly data = computed(() => {
    const search = this.filter().toLowerCase();

    return (
      this.books()?.filter(
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

interface IBook {
  id: string;
  title: string;
  lead: string;
  image: string;
  price: {
    min: number;
    current: number;
    max: number;
  };
}
