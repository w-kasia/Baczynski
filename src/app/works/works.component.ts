import { Component, OnInit } from '@angular/core';
import { WorksService } from './works.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  menuIcon = 'menu';
  portrait_Baczynski = 'assets/images/portrait_Krzys.png';


  worksTitles: string[] | undefined;

  selectedTitle: any = '';

  apiURL2: any | undefined;


  constructor(private worksService: WorksService, private router: Router) {}

  ngOnInit(): void {
    this.worksService.getWorksTitles().subscribe(data => {
      this.worksTitles = data.map(work => work.title
        );
    });
  }

  redirectToPDF(title: string) {
    const formattedTitle = this.worksService.formatTitle(title);
    const pdfURL = `https://wolnelektury.pl/media/book/pdf/baczynski-${formattedTitle}.pdf`;
    window.open(pdfURL, '_blank');
  }

}
