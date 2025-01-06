import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NominaComponent } from './componets/nomina/nomina.component';
import { ListaComponent } from './componets/lista/lista.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NominaComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NominaComponent,
    ListaComponent
  ],
})
export class NominasModule { }
