import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComunicacionComponent,
    PadreComponent,
    HijoComponent
  ],
  exports: [
    ComunicacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
