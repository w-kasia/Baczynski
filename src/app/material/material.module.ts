import { NgModule } from "@angular/core";

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

const material = [MatIconModule, MatMenuModule, MatExpansionModule, MatTableModule, MatButtonModule];

@NgModule({
  imports: [material],
  exports: [material]
})

export class MaterialModule {}
