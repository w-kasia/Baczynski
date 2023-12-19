import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  private apiUrl = 'https://wolnelektury.pl/api/authors/krzysztof-kamil-baczynski/books/?format=json';
  // private apiUrl2 = 'https://wolnelektury.pl/api/authors/krzysztof-kamil-baczynski/books/'
  // https://wolnelektury.pl/api/books/baczynski-co-jest-we-mnie/?format=json
  private apiURL2= 'https://wolnelektury.pl/media/book/pdf/baczynski-';

  constructor(private http: HttpClient) {}

  getWorksTitles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  //do poprawy
  getWork(title: any): Observable<any> {
    const formattedTitle = this.formatTitle(title);
    return this.http.get<any>(`${this.apiURL2}${formattedTitle}.pdf`);
  }


// getWork(title: any): Observable<any> {
//   const formattedTitle = this.formatTitle(title);
//   const pdfUrl = `${this.apiURL2}${formattedTitle}.pdf`;

//   return this.http.get<any>(pdfUrl).pipe(
//     catchError((error) => {
//       alert('Nie udało się wyświetlić utworu');
//       const errorMessage = 'nie udalo sie';
//       return throwError(errorMessage);
//     })
//   )
// }



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
