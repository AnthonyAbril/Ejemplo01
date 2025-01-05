import { Component, EventEmitter, Input, Output  } from '@angular/core';//le importamos la posibilidad de recibir datos
import { Empleado } from '../empleado';//importamos la clase empleado

@Component({
  selector: 'app-empleados-lista',
  standalone: false,

  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent {
  @Input() nombre: string=""; //declaramos el dato importado desde fuera
  @Input() empleados: Empleado[] = [];//declaramos el dato importado desde fuera
  @Output() empleadosActualizados = new EventEmitter<Empleado[]>(); //declaramos el dato a exportar

  //Creamos un array de empleados
  // public empleados: Empleado[] = [
  // new Empleado('Javier', 25, true),
  // new Empleado('Pepe', 52),
  // new Empleado('Paco', 19, true),
  // new Empleado('Pedro', 22)
  // ];

  despedir(indice:number): void {
    this.empleados[indice].contratado = false;
    this.empleadosActualizados.emit(this.empleados);
    }
    contratar(indice:number): void {
    this.empleados[indice].contratado = true;
    this.empleadosActualizados.emit(this.empleados);
    }

  public colorD:string = 'lime';
  public colorC:string = 'orange';

  //public ctx:any = {estimate: this.empleados.length};
}
