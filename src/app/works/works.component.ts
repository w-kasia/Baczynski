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
  Baczynski_portrait_2 = 'assets/images/Baczynski_works.png';

  getPortraitStyles() {
    return `
      width: 350px;
    `
  }

  worksTitles: string[] | undefined;

  selectedTitle: any = '';
  displayedWork: any = '';

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
