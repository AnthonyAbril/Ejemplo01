import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaComponent } from './componets/factura/factura.component';
import { ListaComponent } from './componets/lista/lista.component';



@NgModule({
  declarations: [
    FacturaComponent,
    ListaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FacturaComponent,
    ListaComponent
  ],
})
export class FacturasModule { }
