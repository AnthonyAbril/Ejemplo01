import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { ListaComponent } from './empleados/lista/lista.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    EmpleadoComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
