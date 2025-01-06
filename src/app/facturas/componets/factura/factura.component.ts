import { Component } from '@angular/core';
import { Factura } from '../../factura';

@Component({
  selector: 'app-facturas-factura',
  standalone: false,
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})

export class FacturaComponent {
  //Array de facturas
  public facturas: Factura[] = [
    new Factura(1, '01/01/2024', true, 25),
    new Factura(2, '01/01/2024', true, 52),
    new Factura(3, '01/01/2024', true, 19),
    new Factura(4, '01/01/2024', true, 22)
  ];

  //Puntero para seleccionar en el array
  public seleccionado: number = 0;

  //Actualiza su lista con los cambios que le pase la clase hija (lista)
  actualizarFacturas(facturasActualizadas: Factura[]) {
    this.facturas = facturasActualizadas;
    if (this.seleccionado > this.facturas.length - 1) 
      this.seleccionado = 0;
  }

  //Crea una nueva factura con valores por defecto y le pone el puntero
  public nuevaFactura() {
    this.facturas.push(new Factura(this.facturas.length + 1, '01/01/2024', true, 0));
    this.seleccionado = this.facturas.length - 1;
  }
}
