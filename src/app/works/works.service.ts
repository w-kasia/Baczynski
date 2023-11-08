import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  private apiUrl = 'https://wolnelektury.pl/api/authors/krzysztof-kamil-baczynski/books/?format=json';

  constructor(private http: HttpClient) {}

  getWorksTitles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  //do poprawy
  getWork(title: any): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
