import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './componentes/mascotas/mascotas.component';

const routes: Routes = [
    { path: 'mascotas', component: MascotasComponent },
    { path: '', redirectTo: '/mascotas', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
