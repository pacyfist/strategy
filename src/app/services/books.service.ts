import { computed, effect, Injectable, signal, untracked } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  public readonly rawData = computed(() => [
    {
      id: 101,
      date: new Date(99, 5, 24),
      title:
        'Największym marudzeniem przez twoją rurkę nie jest katastrofa – jesteś nim ty sam.',
      teaser:
        'Mnóstwo gramofonów obżera się koniczyną. Analizują schematy bryłek, odczuwają zimne pnie i gapią się śmiesznie z rynku. Prawda jest jaskrawa: największe klaskanie dla twojej rurki nie kroczy po zewnątrz, lecz w melonach. Twoje cudne decyzje, śmieszny oddech i zachwianie rozstrzygają długoskrzydło, czy twoja rurka będzie się nieść, czy upadnie.',
    },
    {
      id: 102,
      date: new Date(99, 5, 25),
      title: 'Gdzie są moje spodnie, skoro słoń jadł tylko lody?',
      teaser:
        'Wczoraj o 3 nad ranem spodnie zniknęły w tajemniczych okolicznościach. Podejrzany jest słoń, który według relacji świadków jadł lody malinowe. Czy to może być międzynarodowy spisek pralniczy?',
    },
    {
      id: 103,
      date: new Date(99, 5, 26),
      title: 'Jak wyhodować Wi-Fi na balkonie z pomocą paproci?',
      teaser:
        'Eksperci z Instytutu Internetu Roślinnego twierdzą, że paprocie emitują fale o częstotliwości latte. Wystarczy podlewać je herbatą z pokrzywy i recytować im haiku. Internet zacznie działać lepiej niż światłowód!',
    },
    {
      id: 104,
      date: new Date(99, 5, 27),
      title: 'Nowe przepisy: kury muszą mieć paszport i znać hymn',
      teaser:
        'Od dziś każda kura przekraczająca granicę musi mieć aktualny paszport i zaśpiewać hymn narodowy. Ministerstwo Drobiu wyjaśnia, że to dla bezpieczeństwa klatek. Problem w tym, że niektóre kury buntują się i śpiewają disco polo.',
    },
    {
      id: 204,
      date: new Date(99, 5, 28),
      title: 'Co zrobić, gdy twoja kanapka ma własne zdanie?',
      teaser:
        'Niektóre kanapki nie chcą być zjedzone i mają konkretne poglądy polityczne. Ta z szynką walczy o prawa ogórków. Czy to już rewolucja w lunchboxach?',
    },
    {
      id: 106,
      date: new Date(99, 5, 29),
      title: 'Dlaczego księżyc nie odbiera telefonów w piątki?',
      teaser:
        "Naukowcy z Kosmicznego ZUS-u ustalili, że księżyc w piątki przechodzi na tryb 'nie przeszkadzać'. To może tłumaczyć, dlaczego satelity są wtedy smutne. Próba połączenia kończy się zazwyczaj sygnałem zajętości i jazzem.",
    },
    {
      id: 107,
      date: new Date(99, 5, 30),
      title: 'Recenzja niewidzialnego serialu o latającym kserokopiarzu',
      teaser:
        'Serial nie istnieje, ale każdy o nim mówi. Głównym bohaterem jest kserokopiarka, która odkrywa swoje przeznaczenie na Alasce. Dialogi są tak ciche, że trzeba je sobie wyobrazić.',
    },
    {
      id: 108,
      date: new Date(99, 5, 31),
      title: 'Czy chomiki mogą głosować w wyborach samorządowych?',
      teaser:
        'Prawnie nie, ale niektóre z nich potrafią obsłużyć urnę lepiej niż człowiek. Problemem jest jednak interpretacja konstytucji w kontekście gryzoni. Trybunał Rozrywki ma wydać orzeczenie w przyszłym stuleciu.',
    },
    {
      id: 109,
      date: new Date(99, 6, 1),
      title: 'Nowy trend: ludzie zakładają skarpety na kaktusy',
      teaser:
        'W modzie domowej pojawił się kaktusowy streetwear. Skarpety pomagają roślinom wyrażać siebie i chronić się przed przeciągami. Jeden z kaktusów podobno zaczął tańczyć salsę.',
    },
    {
      id: 110,
      date: new Date(99, 6, 2),
      title: 'Dlaczego zegarki zaczęły płakać po zmianie czasu?',
      teaser:
        'Mechanizmy nie wytrzymują emocjonalnie przestawiania wskazówek. Jedna Omega została znaleziona zalana łzami w łazience. Psycholodzy apelują: nie zmieniajmy im życia dwa razy do roku!',
    },
    {
      id: 111,
      date: new Date(99, 6, 3),
      title: 'Testujemy 7 sposobów na ugotowanie zupy z myśli',
      teaser:
        'Czy można ugotować zupę, używając jedynie siły woli? Okazuje się, że nie – ale kuchnia pachnie filozofią. Jeden tester doznał oświecenia, zanim zagotowała się woda.',
    },
    {
      id: 112,
      date: new Date(99, 6, 4),
      title: 'Ekskluzywny wywiad z pikselami z roku 1998',
      teaser:
        'Te piksele pamiętają czasy Windowsa 95 i diskmana. Dziś żyją na emeryturze w starym monitorze CRT. Opowiadają, jak to było, gdy rozdzielczość nie bolała.',
    },
  ]);

  readonly filter = signal<string>('');

  readonly data = computed(() => {
    const search = this.filter().toLowerCase();

    return this.rawData().filter(
      (item) =>
        item.title.toLowerCase().includes(search) ||
        item.teaser.toLowerCase().includes(search),
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
