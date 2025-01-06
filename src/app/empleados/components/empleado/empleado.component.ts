import { Component, ViewChild } from '@angular/core'; //importamos la posibilidad de ver clases hijas
import { Empleado } from '../../empleado'; //importamos la clase Empleado
import { ListaComponent } from '../lista/lista.component';//importamos la clase hija Lista

@Component({
  selector: 'app-empleados-empleado',
  standalone:false,
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})

export class EmpleadoComponent {
  /*
  @ViewChild('hijo') hijo!: ListaComponent; //Definimos una propiedad “hijo” que hara referencia a la clase hija con un decorador @ViewChid

  public llamaAhijo(){
    if (this.empleados[this.seleccionado].contratado)
    this.hijo.despedir(this.seleccionado)
    else this.hijo.contratar(this.seleccionado);
  }
  */

  public empleados: Empleado[] = [
    new Empleado('Javier', 25, true),
    new Empleado('Pepe', 52),
    new Empleado('Paco', 19, true),
    new Empleado('Pedro', 22)
  ];
  public seleccionado: number = 0;
    actualizarEmpleados(empleadosActualizados: Empleado[]) {
    this.empleados = empleadosActualizados;
  }
   
  public nuevoEmpleado(): void {
    this.empleados.push(new Empleado('',0));  //se añade nueva instancia vacia de empleado en el array empelados
    this.seleccionado = this.empleados.length - 1;  //se selecciona al ser creado
  }

  /*
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
  */
}
