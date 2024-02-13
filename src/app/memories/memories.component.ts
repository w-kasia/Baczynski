import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css']
})
export class MemoriesComponent implements OnInit{

  memories: any;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData().subscribe((data) => {
      this.memories = data;
     },
     error => {
      console.log('Error fetchnig json data in Memories Component');
      this.errorMessage = 'Przepraszamy. Wystąpił błąd, nie możemy załadować danych. Prosimy spróbować później.'
     }
     );
  }

  getData() {
    return this.http.get<any[]>('assets/memories.json');
  }
}
