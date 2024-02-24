import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Baczyński';

  constructor(private spinner: NgxSpinnerService) {}

  // ngAfterViewInit(): void { this.spinner.show();
  // setTimeout(() => {
  //       this.spinner.hide();
  //     }, 6000);}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 6000);
  }
}
