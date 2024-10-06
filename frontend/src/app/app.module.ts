import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActSolicitudComponent } from './act-solicitud/act-solicitud.component';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { HomeComponent } from './home/home.component';
import { ListasMascotasComponent } from './listas-mascotas/listas-mascotas.component';
import { ListasSolicitudesComponent } from './listas-solicitudes/listas-solicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    ActSolicitudComponent,
    AgregarMascotaComponent,
    CrearSolicitudComponent,
    HomeComponent,
    ListasMascotasComponent,
    ListasSolicitudesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Para usar ngModel
    HttpClientModule // Para hacer solicitudes HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
