import { Component } from '@angular/core';
import { Empleado } from './empleado'; //importamos la clase Empleado

@Component({
  selector: 'app-empleados-empleado',
  standalone:false,
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  public empleado1: Empleado = new Empleado('Javier',25);

  //definimos funcion get de el nombre en mayuscula 
  get enMayusculaNombre():string{
    return this.empleado1.nombre.toUpperCase();
  }

  //definimos metodo
  getNombreEdad():string{
    return `${ this.empleado1.nombre} - ${ this.empleado1.edad}`;
  }
  
  //metodo que cambia el nombre
  cambiaEmpleado():void{
    this.empleado1.nombre = 'Paco';
  }
  //metodo que cambia la edad
  cambiaEdad():void{
    this.empleado1.edad = 44;
  }

  restableceValores():void{
    this.empleado1.nombre = 'Javier';
    this.empleado1.edad = 25;
  }
}
