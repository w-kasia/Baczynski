import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css']
})
export class MemoriesComponent implements OnInit{

  memories: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData().subscribe((data) => {
      this.memories = data;
     })
  }

  getData() {
    return this.http.get<any[]>('assets/memories.json');
  }
}
