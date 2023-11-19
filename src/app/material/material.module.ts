import { NgModule } from "@angular/core";

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const material = [MatIconModule, MatMenuModule, MatExpansionModule, MatTableModule, MatButtonModule, MatCardModule, MatProgressBarModule];

@NgModule({
  imports: [material],
  exports: [material]
})

export class MaterialModule {}
