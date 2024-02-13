import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  errorMessage:string= '';

  private apiURL = 'https://wolnelektury.pl/api/authors/krzysztof-kamil-baczynski/books/?format=json';
  private url = 'https://wolnelektury.pl/media/book/pdf/baczynski-';

  constructor(private http: HttpClient) {}

  getWorksTitles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  getWork(title: any): Observable<any> {
    const formattedTitle = this.formatTitle(title);
    return this.http.get<any>(`${this.url}${formattedTitle}.pdf`)
    .pipe(
      catchError(error => {
        console.log('Error fetchnig json data in Poems Component', error);
        this.errorMessage = 'Przepraszamy. Wystąpił błąd, nie możemy załadować utworu. Prosimy spróbować później.';
        return of(null);
      })
    );
  }

  formatTitle(title: string): string {
    return title
    .toLowerCase()
    .replace(/[.,;:*!?()}{[\]]/g, '')
    .replace(/ /g, '-')
    .replace(/[ł]/g, 'l')
    .replace(/[ą]/g, 'a')
    .replace(/[ę]/g, 'e')
    .replace(/[ó]/g, 'o')
    .replace(/[ś]/g, 's')
    .replace(/[ż]/g, 'z')
    .replace(/[ź]/g, 'z')
    .replace(/[ć]/g, 'c')
    .replace(/[ń]/g, 'n')
    .replace(/-{2,}/g, '-')
  }
}
