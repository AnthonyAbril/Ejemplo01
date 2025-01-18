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
}