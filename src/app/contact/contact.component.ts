import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsComponent } from '../dialog-animations/dialog-animations.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  menuIcon = 'menu';
  firestore: Firestore = inject(Firestore);

  @ViewChild('f') contactForm: any;

  saveData(): void {
    const acollection = collection(this.firestore, 'message');
    addDoc(acollection, {
      'name': this.contactForm.value.name,
      'email': this.contactForm.value.email,
      'title': this.contactForm.value.title,
      'message': this.contactForm.value.message
    });
   }

  onSubmit(form: NgForm) {
    this.saveData();
    form.resetForm();
  }

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}