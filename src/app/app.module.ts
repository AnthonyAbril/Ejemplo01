import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ContadorComponent } from './contador/contador.component';

import { EmpleadosModule } from './empleados/empleados.module';

import { FacturasModule } from './facturas/facturas.module';
import { NominasModule } from './nominas/nominas.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmpleadosModule,
    FacturasModule,
    NominasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }