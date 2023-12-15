import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  onSubmit(form: NgForm) {
    console.log('wiadomość wysłana');
    form.resetForm();
  }
}
