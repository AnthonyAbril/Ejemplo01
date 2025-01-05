import { Component } from '@angular/core';
import { Empleado } from './empleados/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'ejemplo01';

  public empleados: Empleado[] = [
    new Empleado('Javier', 25, true),
    new Empleado('Pepe', 52),
    new Empleado('Paco', 19, true),
    new Empleado('Pedro', 22)
  ];

  actualizarEmpleados(empleadosActualizados: Empleado[]) {
    this.empleados = empleadosActualizados;
    // console.log('Empleados actualizados desde el hijo:', this.empleados);
  }
   
  public seleccionado: number = 0;

  public nombre:string = 'Juan';
}