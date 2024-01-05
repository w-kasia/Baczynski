import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

// interface Questions {
//   question: any;
//   answer: any;
// }

interface selectedQuestion {
  answer: any;
}
@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent {

  motherImage = 'assets/images/mother.png';
  butterfly = 'assets/images/butterfly.png';
  teenage = 'assets/images/teenage.png';
  quoteIcon = 'assets/quote.svg';
  menuIcon = 'menu';


  quote = `"Na imię mi było Krzysztof,
  i jeszcze ciało - to tak niewiele".`

  questions: any[] = [];
  selectedQuestion: selectedQuestion = {} as selectedQuestion;


  constructor(private http: HttpClient) {
    this.fetchQuestions();
  }

  fetchQuestions() {
    this.http.get<any[]>('assets/data.json').subscribe(data => {
      this.questions = data;
      this.selectedQuestion = this.questions[0];
    });
  }

  selectQuestion(question: any) {
    this.selectedQuestion = question;
  }


  poems: any[] = [
    {id: 1, text: `Nas nauczono. Nie ma miłości.
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
    ale zostanie kamień – tak – głaz.`}
  ]

}
