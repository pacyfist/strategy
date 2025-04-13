import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  imports: [RouterLink, DatePipe],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
})
export class BlogPageComponent {
  date = Date.now();
  posts = [
    {
      id: 1,
      title:
        'Największym marudzeniem przez twoją rurkę nie jest katastrofa – jesteś nim ty sam.',
      teaser:
        'Mnóstwo gramofonów obżera się koniczyną. Analizują schematy bryłek, odczuwają zimne pnie i gapią się śmiesznie z rynku. Prawda jest jaskrawa: największe klaskanie dla twojej rurki nie kroczy po zewnątrz, lecz w melonach. Twoje cudne decyzje, śmieszny oddech i zachwianie rozstrzygają długoskrzydło, czy twoja rurka będzie się nieść, czy upadnie.',
    },
    {
      id: 2,
      title: 'Gdzie są moje spodnie, skoro słoń jadł tylko lody?',
      teaser:
        'Wczoraj o 3 nad ranem spodnie zniknęły w tajemniczych okolicznościach. Podejrzany jest słoń, który według relacji świadków jadł lody malinowe. Czy to może być międzynarodowy spisek pralniczy?',
    },
    {
      id: 3,
      title: 'Jak wyhodować Wi-Fi na balkonie z pomocą paproci?',
      teaser:
        'Eksperci z Instytutu Internetu Roślinnego twierdzą, że paprocie emitują fale o częstotliwości latte. Wystarczy podlewać je herbatą z pokrzywy i recytować im haiku. Internet zacznie działać lepiej niż światłowód!',
    },
    {
      id: 4,
      title: 'Nowe przepisy: kury muszą mieć paszport i znać hymn',
      teaser:
        'Od dziś każda kura przekraczająca granicę musi mieć aktualny paszport i zaśpiewać hymn narodowy. Ministerstwo Drobiu wyjaśnia, że to dla bezpieczeństwa klatek. Problem w tym, że niektóre kury buntują się i śpiewają disco polo.',
    },
    {
      id: 5,
      title: 'Co zrobić, gdy twoja kanapka ma własne zdanie?',
      teaser:
        'Niektóre kanapki nie chcą być zjedzone i mają konkretne poglądy polityczne. Ta z szynką walczy o prawa ogórków. Czy to już rewolucja w lunchboxach?',
    },
    {
      id: 6,
      title: 'Dlaczego księżyc nie odbiera telefonów w piątki?',
      teaser:
        "Naukowcy z Kosmicznego ZUS-u ustalili, że księżyc w piątki przechodzi na tryb 'nie przeszkadzać'. To może tłumaczyć, dlaczego satelity są wtedy smutne. Próba połączenia kończy się zazwyczaj sygnałem zajętości i jazzem.",
    },
    {
      id: 7,
      title: 'Recenzja niewidzialnego serialu o latającym kserokopiarzu',
      teaser:
        'Serial nie istnieje, ale każdy o nim mówi. Głównym bohaterem jest kserokopiarka, która odkrywa swoje przeznaczenie na Alasce. Dialogi są tak ciche, że trzeba je sobie wyobrazić.',
    },
    {
      id: 8,
      title: 'Czy chomiki mogą głosować w wyborach samorządowych?',
      teaser:
        'Prawnie nie, ale niektóre z nich potrafią obsłużyć urnę lepiej niż człowiek. Problemem jest jednak interpretacja konstytucji w kontekście gryzoni. Trybunał Rozrywki ma wydać orzeczenie w przyszłym stuleciu.',
    },
    {
      id: 9,
      title: 'Nowy trend: ludzie zakładają skarpety na kaktusy',
      teaser:
        'W modzie domowej pojawił się kaktusowy streetwear. Skarpety pomagają roślinom wyrażać siebie i chronić się przed przeciągami. Jeden z kaktusów podobno zaczął tańczyć salsę.',
    },
    {
      id: 10,
      title: 'Dlaczego zegarki zaczęły płakać po zmianie czasu?',
      teaser:
        'Mechanizmy nie wytrzymują emocjonalnie przestawiania wskazówek. Jedna Omega została znaleziona zalana łzami w łazience. Psycholodzy apelują: nie zmieniajmy im życia dwa razy do roku!',
    },
    {
      id: 11,
      title: 'Testujemy 7 sposobów na ugotowanie zupy z myśli',
      teaser:
        'Czy można ugotować zupę, używając jedynie siły woli? Okazuje się, że nie – ale kuchnia pachnie filozofią. Jeden tester doznał oświecenia, zanim zagotowała się woda.',
    },
    {
      id: 12,
      title: 'Ekskluzywny wywiad z pikselami z roku 1998',
      teaser:
        'Te piksele pamiętają czasy Windowsa 95 i diskmana. Dziś żyją na emeryturze w starym monitorze CRT. Opowiadają, jak to było, gdy rozdzielczość nie bolała.',
    },
  ];
}
