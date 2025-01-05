import { Component } from '@angular/core';
import { Empleado } from '../empleado/empleado';//importamos la clase empleado

@Component({
  selector: 'app-empleados-lista',
  standalone: false,

  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent {
  //Creamos un array de empleados
  public empleados: Empleado[] = [
    new Empleado('Javier',25,true),
    new Empleado('Pepe',52),
    new Empleado('Paco',19,true),
    new Empleado('Pedro',22)
  ];

  despedir(indice:number):void{
    this.empleados[indice].contratado = false;
  }
  contratar(indice:number):void{
    this.empleados[indice].contratado = true;
  }

  public colorD:string = 'lime';
  public colorC:string = 'orange';
}
