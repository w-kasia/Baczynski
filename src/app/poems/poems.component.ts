import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorksService } from '../works.service';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent {
  worksTitles!: string[];
  selectedTitle: any = '';
  url: any | undefined;
  searchTitle: string = '';

  constructor(private worksService: WorksService, private router: Router) {}

  ngOnInit(): void {
    this.worksService.getWorksTitles().subscribe(data => {
      this.worksTitles = data.map(work => work.title);
    });
  }

  redirectToPDF(title: string) {
    const formattedTitle = this.worksService.formatTitle(title);
    const pdfURL = `https://wolnelektury.pl/media/book/pdf/baczynski-${formattedTitle}.pdf`;
    window.open(pdfURL, '_blank');
  }

  onSearchTextEntered(searchValue: string) {
    this.searchTitle = searchValue;
  }
}
