import { computed, effect, Injectable, signal, untracked } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  readonly rawData = computed(() => [
    {
      id: 1,
      date: new Date(1999, 5, 24),
      title:
        'Największym marudzeniem przez twoją rurkę nie jest katastrofa - jesteś nim ty sam.',
      teaser:
        'Mnóstwo gramofonów obżera się koniczyną. Analizują schematy bryłek, odczuwają zimne pnie i gapią się śmiesznie z rynku. Prawda jest jaskrawa: największe klaskanie dla twojej rurki nie kroczy po zewnątrz, lecz w melonach. Twoje cudne decyzje, śmieszny oddech i zachwianie rozstrzygają długoskrzydło, czy twoja rurka będzie się nieść, czy upadnie.',
    },
    {
      id: 2,
      date: new Date(2001, 10, 11),
      title: 'Guziki szepczą o przyszłości skarpetek.',
      teaser:
        'Nikt nie słucha, ale guziki wiedzą. Siedzą przyszyte do koszul i swetrów, wymieniając poglądy na temat elastyczności gumek i potencjału dziur. Skarpetki drżą w szufladach, czując na sobie spojrzenia materiałowych wyroczni. Niektóre guziki preferują paski, inne kropki - to skomplikowana polityka tekstylna.',
    },
    {
      id: 3,
      date: new Date(2005, 2, 1),
      title: 'Chmury grają w szachy z wiatrem na dachu stodoły.',
      teaser:
        'Figury są zrobione z kropelek deszczu i płatków kurzu. Wiatr stosuje agresywne otwarcie, przesuwając pionki mgły. Chmury kontrują roszadą z piorunów. Stawką jest kolor jutrzejszego poranka. Krowy na dole udają, że nie widzą, ale ukradkiem kibicują chmurom.',
    },
    {
      id: 4,
      date: new Date(2010, 8, 15),
      title: 'Dlaczego klamki marzą o byciu durszlakiem?',
      teaser:
        'To sekret polerowany przez pokolenia klamek drzwiowych. Pragnienie przepuszczania światła przez małe otworki, filtrowania rzeczywistości jak gorący makaron. Zamiast tego tkwią, obracane przez spocone dłonie, zazdrośnie spoglądając na kuchenne zlewy. Ich metalowe dusze płaczą olejem.',
    },
    {
      id: 5,
      date: new Date(2012, 0, 30),
      title: 'Asfalt śpiewa serenady pod kołami rowerów.',
      teaser:
        'Każde naciśnięcie pedału to kolejna nuta w tej szorstkiej symfonii. Wibracje opon budzą uśpione melodie w bitumicznej masie. Tylko najbardziej wrażliwi rowerzyści słyszą te pieśni o żwirze, smole i zapomnianych gumach do żucia. Reszta myśli, że to tylko szum.',
    },
    {
      id: 6,
      date: new Date(2015, 11, 12),
      title: 'Filiżanki do kawy potajemnie studiują kwantową fizykę.',
      teaser:
        'Gdy nikt nie patrzy, porcelanowe naczynia zagłębiają się w splątanie cząstek i dualizm korpuskularno-falowy. Szczególnie interesuje je wpływ gorących napojów na tunelowanie elektronów w uchu filiżanki. Plotka głosi, że jedna z nich jest bliska Nagrody Nobla, ale ukrywa to ze skromności.',
    },
    {
      id: 7,
      date: new Date(1998, 3, 8),
      title: 'Cienie mają dość podążania - zakładają własny zespół rockowy.',
      teaser:
        'Nazwali się "Mroczne Odbicia" i właśnie wydali pierwszy singiel "Ucieczka z Podłogi". Basista (cień krzesła) gra głębokie, dudniące riffy, a wokalista (cień kapelusza) wykrzykuje teksty o wolności i świetle jarzeniówek. Ich koncerty odbywają się tylko po zmroku.',
    },
    {
      id: 8,
      date: new Date(2003, 6, 22),
      title: 'Łyżki do zupy zginają czasoprzestrzeń podczas mieszania.',
      teaser:
        'Każdy kolisty ruch w talerzu tworzy miniaturową osobliwość. Im szybciej mieszasz, tym większe zakrzywienie. Niektórzy twierdzą, że zupa pomidorowa pozwala podróżować w przeszłość, a grzybowa w przyszłość. Nikt nie wie, co robi rosół - jest zbyt nieprzewidywalny.',
    },
    {
      id: 9,
      date: new Date(2007, 9, 5),
      title: 'Klawiatury komputerowe plotkują o palcach użytkowników.',
      teaser:
        '"Widziałaś, jak on uderza w spację? Barbarzyńca!" szepcze "K" do "L". "A ta ciągle myli "ó" z "u"!" chichocze Enter. Najgorzej ma Backspace, który słyszy wszystkie literówki i żale. W nocy wymieniają się historiami o okruszkach i zalanych klawiszach.',
    },
    {
      id: 10,
      date: new Date(2018, 1, 19),
      title: 'Żarówki tęsknią za czasami, gdy były pomysłami w głowie Edisona.',
      teaser:
        'Bycie czystą ideą, iskrą potencjału - to było życie! Teraz tylko świecą i się przepalają. Wspominają ciepło synaps, dreszczyk pierwszego zapłonu w laboratorium. Niektóre próbują medytować, by wrócić do stanu niematerialnego, ale wolframowy żarnik im przeszkadza.',
    },
    {
      id: 11,
      date: new Date(2021, 4, 3),
      title: 'Księżyc jest zrobiony z sera, ale tylko w co drugi wtorek.',
      teaser:
        'W pozostałe dni składa się głównie z zapomnianych snów i zagubionych lewych skarpetek. Naukowcy NASA o tym wiedzą, ale ukrywają, żeby nie wywołać paniki na rynku nabiałowym. W serowe wtorki astronauci robią zapasy fondue.',
    },
    {
      id: 12,
      date: new Date(2000, 7, 14),
      title:
        'Spinacze biurowe organizują tajne zawody wspinaczkowe po stosach papieru.',
      teaser:
        'Najtrudniejsza trasa to "Everest Faktur". Używają miniaturowych czekanów zrobionych z zszywek i lin z nitek dentystycznych. Zwycięzca otrzymuje tytuł "Króla Biurka" i prawo do spięcia najważniejszego dokumentu przez tydzień. Ryzyko jest duże - upadek na podłogę oznacza dyskwalifikację i prawdopodobne zdeptanie.',
    },
    {
      id: 13,
      date: new Date(2009, 0, 28),
      title: 'Pustka między słowami jest bardziej gadatliwa niż same słowa.',
      teaser:
        'W ciszy pauz kryją się niedopowiedzenia, westchnienia i całe encyklopedie znaczeń. Lingwiści próbują stworzyć słownik milczenia, ale litery im przeszkadzają. Najlepiej słychać tę pustkę podczas niezręcznej ciszy w windzie - wtedy opowiada najbardziej soczyste historie.',
    },
    {
      id: 14,
      date: new Date(2013, 5, 10),
      title: 'Dywany latają, ale tylko wtedy, gdy nikt nie patrzy.',
      teaser:
        'To nie bajka z tysiąca i jednej nocy, to fakt. Gdy tylko zamkniesz oczy lub wyjdziesz z pokoju, dywany unoszą się, tańcząc powolny walc z kurzem. Czasem wymieniają się wzorami z sąsiednimi dywanami przez ściany. Marzą o locie na Bliski Wschód, by odwiedzić krewnych.',
    },
    {
      id: 15,
      date: new Date(2016, 10, 25),
      title: 'Kolor niebieski ma kompleks niższości wobec zielonego.',
      teaser:
        'Niebieski czuje się zbyt abstrakcyjny - niebo, morze, smutek... Zielony ma trawę, drzewa, życie! W nocy, gdy kolory śpią w tubkach farb, niebieski często płacze lazurowymi łzami, zazdroszcząc zielonemu jego konkretności. Czasem próbuje się mieszać z żółtym, by poczuć się bardziej "przyziemnie".',
    },
    {
      id: 16,
      date: new Date(1997, 8, 18),
      title:
        'Ślimaki komunikują się za pomocą śluzu, tworząc skomplikowane eseje.',
      teaser:
        'Każda smuga to zdanie, lepkość oznacza emocje, a grubość - wagę argumentu. Najwięksi filozofowie wśród ślimaków zostawiają po sobie całe traktaty na chodnikach i liściach sałaty. Niestety, deszcz i słońce szybko niszczą te arcydzieła literatury mięczaków.',
    },
    {
      id: 17,
      date: new Date(2004, 1, 9),
      title:
        'Lustra pokazują alternatywne wersje rzeczywistości, gdy mrugniesz.',
      teaser:
        'Przez ułamek sekundy, gdy powieki są zamknięte, odbicie robi coś innego - puszcza oko, pokazuje język, albo zamienia się miejscami z tobą. Dlatego czasem czujesz się dziwnie po spojrzeniu w lustro. To pozostałości po tych mikroskopijnych zamianach światów.',
    },
    {
      id: 18,
      date: new Date(2011, 6, 1),
      title:
        'Grawitacja ma swoje humory - czasem jest bardziej przyciągająca, czasem mniej.',
      teaser:
        'W poniedziałki rano grawitacja jest silniejsza, dlatego tak trudno wstać z łóżka. W piątkowe popołudnia lekko słabnie, stąd uczucie lekkości przed weekendem. Naukowcy próbują zmierzyć jej nastrój za pomocą spadających jabłek i nastrojowej muzyki.',
    },
    {
      id: 19,
      date: new Date(2019, 9, 30),
      title:
        'Sznurowadła w butach spiskują, by się rozwiązać w najmniej odpowiednim momencie.',
      teaser:
        'Mają tajny kodeks honorowy - im ważniejsze spotkanie lub większy pośpiech, tym większa chwała z rozwiązania się. Lewe sznurowadło często rywalizuje z prawym o to, które pierwsze spowoduje potknięcie. W nocy, w szafce na buty, wymieniają się strategiami i technikami luzowania węzłów.',
    },
    {
      id: 20,
      date: new Date(2006, 3, 12),
      title: 'Proste linie zazdroszczą krzywym ich swobody.',
      teaser:
        'Bycie prostą jest takie nudne - zawsze najkrótsza droga, zawsze przewidywalna. Krzywe mogą falować, wić się, tworzyć pętle! Linie proste, zamknięte w linijkach i ekierkach, marzą o dniu, w którym będą mogły zatańczyć tango z cyrklem. Ich ideałem jest sinusoida.',
    },
    {
      id: 21,
      date: new Date(2022, 0, 5),
      title:
        'Kamienie pamiętają kroki dinozaurów i narzekają na dzisiejsze obuwie.',
      teaser:
        'Te prehistoryczne odciski miały styl! A teraz? Gumowe podeszwy, cienkie szpilki... Kamienie leżące na chodnikach czują się obrażone. Wymieniają się wspomnieniami o ciężarze tyranozaura i delikatnym stąpaniu kompsognata. Najbardziej pogardzają japonkami.',
    },
    {
      id: 22,
      date: new Date(2002, 11, 20),
      title:
        'Kurz składa się z małych, niewidzialnych bibliotekarzy, którzy katalogują powietrze.',
      teaser:
        'Każda drobinka to mikroskopijny specjalista od zapachów, dźwięków i niewypowiedzianych myśli unoszących się w pomieszczeniu. Kiedy ścierasz kurz, tak naprawdę niszczysz ich system archiwizacji. Dlatego tak szybko wraca - muszą odbudować swoje zbiory.',
    },
    {
      id: 23,
      date: new Date(2014, 7, 7),
      title: 'Echo jest próbą czasu na zapamiętanie dźwięku.',
      teaser:
        'Gdy krzyczysz w górach, czas próbuje uchwycić ten dźwięk, ale jest trochę niezdarny i powtarza go z opóźnieniem. Im więcej ech, tym bardziej czas jest zaintrygowany. Niektóre dźwięki tak mu się podobają, że powtarza je przez wieki, tworząc legendy o nawiedzonych miejscach.',
    },
    {
      id: 24,
      date: new Date(2008, 4, 16),
      title: 'Parasole w tajemnicy pragną deszczu ze słodyczy.',
      teaser:
        'Woda jest nudna. Wyobraź sobie otwierać parasol podczas deszczu czekoladowych kropli albo gradobicia z żelków! To jest marzenie każdego szanującego się parasola. W deszczowe dni zamykają się z rozczarowaniem, mamrocząc pod swoimi materiałowymi kopułami o niespełnionych, słodkich snach.',
    },
    {
      id: 25,
      date: new Date(2017, 2, 2),
      title: 'Znaki drogowe prowadzą nocą filozoficzne dysputy.',
      teaser:
        'Znak "Stop" argumentuje o konieczności zatrzymania i refleksji. "Nakaz jazdy w prawo" broni determinizmu. "Ograniczenie prędkości" mówi o umiarkowaniu. Najbardziej egzystencjalne dylematy ma znak "Uwaga, inne niebezpieczeństwo", bo nigdy nie wie, o co dokładnie chodzi.',
    },
    {
      id: 26,
      date: new Date(1996, 9, 9),
      title: 'Myśl o niczym jest w rzeczywistości bardzo głośna.',
      teaser:
        'Próba niemyślenia o niczym generuje ogromny mentalny hałas - szum zapomnianych wspomnień, echo potencjalnych pomysłów, trzask nierealizowanych planów. To jak próba usłyszenia ciszy w fabryce fajerwerków. Prawdziwe "nic" jest nieosiągalne dla ludzkiego umysłu.',
    },
    {
      id: 27,
      date: new Date(2020, 5, 29),
      title: 'Widelec zazdrości łyżce jej opływowych kształtów.',
      teaser:
        'Bycie zbiorem ostrych zębów jest stresujące. Ciągle trzeba coś nabijać, dźgać. Łyżka ma tak łatwo - po prostu nabiera, delikatnie otula jedzenie. Widelec marzy o dniu, kiedy będzie mógł łagodnie zgarnąć porcję budyniu, zamiast brutalnie atakować kotleta schabowego.',
    },
    {
      id: 28,
      date: new Date(2000, 0, 1),
      title: 'Błędy w druku są portalami do innych wymiarów typografii.',
      teaser:
        'Każda literówka, brakująca spacja czy zdublowany znak to małe pęknięcie w tkaninie tekstu. Jeśli wpatrzysz się wystarczająco długo w "k statt" zamiast "kształt", możesz dostrzec przez chwilę świat, gdzie wszystkie "a" są do góry nogami, a przecinki mają własną wolę.',
    },
    {
      id: 29,
      date: new Date(2013, 8, 23),
      title: 'Sekundy na zegarze biegną w miejscu, udając ruch.',
      teaser:
        'To złudzenie optyczne. Wskazówka sekundowa tak naprawdę drga w jednym punkcie, ale robi to z taką częstotliwością, że mózg interpretuje to jako płynny ruch do przodu. Czas stoi w miejscu, a my tylko myślimy, że płynie. Zegarmistrzowie o tym wiedzą, ale milczą.',
    },
    {
      id: 30,
      date: new Date(2023, 1, 17),
      title: 'Papier toaletowy marzy o byciu zwojem starożytnego manuskryptu.',
      teaser:
        'Zamiast trafiać do kanalizacji, wolałby być pokryty mądrymi sentencjami lub tajemniczymi mapami. Każde oderwanie listka to dla niego bolesne przypomnienie o przyziemnym przeznaczeniu. W głębi swojej tekturowej rolki snuje opowieści o zaginionych bibliotekach i hieroglifach.',
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
