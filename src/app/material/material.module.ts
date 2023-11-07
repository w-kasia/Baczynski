import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatTableModule} from '@angular/material/table'; 

const material = [MatToolbarModule, MatIconModule, MatMenuModule, MatExpansionModule, MatTableModule];

@NgModule({
  imports: [material],
  exports: [material]
})

export class MaterialModule {}