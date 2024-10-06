import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'Bienvenido a la Aplicación de Adopción de Mascotas';
  description: string = 'Aquí podrás gestionar solicitudes y adoptar mascotas.';
}
