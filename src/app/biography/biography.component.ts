import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface selectedQuestion {
  answer: any;
}
@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {

  menuIcon = 'menu';
  errorMessage: string = '';
  quote = `"Na imię mi było Krzysztof,
  i jeszcze ciało - to tak niewiele".`

  questions: any[] = [];
  selectedQuestion: selectedQuestion = {} as selectedQuestion;

  constructor(private http: HttpClient) {
    this.fetchQuestions();
  }

  fetchQuestions() {
    this.http.get<any[]>('assets/faq.json').subscribe(data => {
      this.questions = data;
      this.selectedQuestion = this.questions[0];
    },
    error => {
      console.log('Error fetchnig json data in Biography Component');
      this.errorMessage = 'Przepraszamy. Wystąpił błąd, nie możemy załadować danych. Prosimy spróbować później.'
    }
    );
  }

  selectQuestion(question: any) {
    this.selectedQuestion = question;
  }

  poem: string = `Nas nauczono. Nie ma miłości.
    Jakże nam jeszcze uciekać w mrok
    przed żaglem nozdrzy węszących nas,
    przed siecią wzdętą kijów i rąk,
    kiedy nie wrócą matki ni dzieci
    w pustego serca rozpruty strąk.
    Nas nauczono. Trzeba zapomnieć,
    żeby nie umrzeć rojąc to wszystko.
    Wstajemy nocą. Ciemno jest, ślisko.
    Szukamy serca – bierzemy w rękę,
    nasłuchujemy: wygaśnie męka,
    ale zostanie kamień – tak – głaz.`

    ngOnInit() {
      const poemSections = document.querySelectorAll('.poemSection');
      const biographyHeadings = document.querySelectorAll('h2');

       const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }

       const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeInTop');
            observer.unobserve(entry.target);
          }
        });
      }, options);

      poemSections.forEach(poemSection => {
        observer.observe(poemSection);
      });
      biographyHeadings.forEach(biographyHeading => {
        observer.observe(biographyHeading);
      });
    }
}
