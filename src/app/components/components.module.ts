import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';



@NgModule({
  declarations: [
    ComunicacionComponent,
    PadreComponent,
    HijoComponent,
    DataBindingComponent
  ],
  exports: [
    ComunicacionComponent,
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
