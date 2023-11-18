import { Component} from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

  menuIcon = 'menu';
  portrait_Baczynski = 'assets/images/portrait_Krzys.png';


  // worksTitles!: string[];

  // selectedTitle: any = '';

  // apiURL2: any | undefined;

  // //for search input
  // searchTitle: string = '';

  // constructor(private worksService: WorksService, private router: Router) {}

  // ngOnInit(): void {
  //   this.worksService.getWorksTitles().subscribe(data => {
  //     this.worksTitles = data.map(work => work.title
  //       );
  //   });
  // }

  // redirectToPDF(title: string) {
  //   const formattedTitle = this.worksService.formatTitle(title);
  //   const pdfURL = `https://wolnelektury.pl/media/book/pdf/baczynski-${formattedTitle}.pdf`;
  //   window.open(pdfURL, '_blank');
  // }

  // //for search input
  // onSearchTextEntered(searchValue: string) {
  //   this.searchTitle = searchValue;
  // }
}
