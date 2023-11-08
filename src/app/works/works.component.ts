import { Component, OnInit } from '@angular/core';
import { WorksService } from './works.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  Baczynski_portrait_2 = 'assets/images/Baczynski_works.png';

  getPortraitStyles() {
    return `
      width: 350px;
    `
  }

  worksTitles: string[] | undefined;

  selectedTitle: any = '';
  displayedWork: any = '';


  constructor(private worksService: WorksService) {}

  ngOnInit(): void {
    this.worksService.getWorksTitles().subscribe(data => {
      this.worksTitles = data.map(work => work.title
        );
    });
  }


//do poprawy
  displayData(title: any): void {
    this.selectedTitle = title;

    this.worksService.getWork(title).subscribe((data) => {
      // this.displayedWork = text;
      this.displayedWork = data.map((work: { href: any; }) => work.href)
    })
  }

}
