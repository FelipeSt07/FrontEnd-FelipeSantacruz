import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActSolicitudComponent } from './act-solicitud/act-solicitud.component';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { HomeComponent } from './home/home.component';
import { ListasMascotasComponent } from './listas-mascotas/listas-mascotas.component';
import { ListasSolicitudesComponent } from './listas-solicitudes/listas-solicitudes.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal
  { path: 'act-solicitud', component: ActSolicitudComponent },
  { path: 'agregar-mascota', component: AgregarMascotaComponent },
  { path: 'crear-solicitud', component: CrearSolicitudComponent },
  { path: 'listas-mascotas', component: ListasMascotasComponent },
  { path: 'listas-solicitudes', component: ListasSolicitudesComponent },
  { path: '**', redirectTo: '' } // Redirige cualquier ruta no encontrada a la ruta principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
