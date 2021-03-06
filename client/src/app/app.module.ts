import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { Ser01Component } from './ser01/ser01.component';
import { Ser02Component } from './ser02/ser02.component';
import { Ser03Component } from './ser03/ser03.component';
import { Prod01Component } from './prod01/prod01.component';
import { Prod02Component } from './prod02/prod02.component';
import { Prod03Component } from './prod03/prod03.component';
import { LoadPageComponent } from './load-page/load-page.component';
import { LoadTaskComponent } from './load-task/load-task.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { OrdenesDeServicioComponent } from './ordenes-de-servicio/ordenes-de-servicio.component';
import { NuevaCuentaCorrentistaComponent } from './nueva-cuenta-correntista/nueva-cuenta-correntista.component';
import { ListaCuentasOrdenDeServicoComponent } from './lista-cuentas-orden-de-servico/lista-cuentas-orden-de-servico.component';
import { InventarioComponent } from './inventario/inventario.component';
import { CuentaRegresivaComponent } from './cuenta-regresiva/cuenta-regresiva.component';


const appRoutes: Routes = [
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    Ser01Component,
    Ser02Component,
    Ser03Component,
    Prod01Component,
    Prod02Component,
    Prod03Component,
    LoadPageComponent,
    LoadTaskComponent,
    FacturacionComponent,
    UserInfoComponent,
    OrdenesDeServicioComponent,
    NuevaCuentaCorrentistaComponent,
    ListaCuentasOrdenDeServicoComponent,
    InventarioComponent,
    CuentaRegresivaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }