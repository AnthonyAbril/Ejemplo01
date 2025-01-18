import { Pipe, PipeTransform } from '@angular/core';
import { Empleado } from '../empleado';

@Pipe({
  name: 'filtroEmpleados'
})
export class FiltroEmpleadosPipe implements PipeTransform {
  //El método transform devolverá un nuevo array con los empleados ya filtrados.
  transform(value: Empleado[], filterBy: string): Empleado[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter ? value.filter(empleado =>
      empleado.nombre.toLocaleLowerCase().includes(filter)) : value;
  }

}
