import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FacturaComponent } from './componets/factura/factura.component';
import { ListaComponent } from './componets/lista/lista.component';


@NgModule({
  declarations: [
    FacturaComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule   
  ],
  exports: [
    FacturaComponent,
    ListaComponent
  ],
})
export class FacturasModule { }
