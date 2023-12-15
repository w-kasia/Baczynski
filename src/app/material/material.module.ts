import { NgModule } from "@angular/core";

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

const material = [MatIconModule, MatMenuModule, MatExpansionModule, MatTableModule, MatButtonModule, MatCardModule, MatSidenavModule, MatListModule, MatToolbarModule, MatFormFieldModule, MatDialogModule, MatInputModule];

@NgModule({
  imports: [material],
  exports: [material]
})

export class MaterialModule {}
