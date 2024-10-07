import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'Bienvenido a la Aplicación de Adopción de Mascotas';
  description: string = 'Aquí podrás gestionar solicitudes y adoptar mascotas.';

  // Ejemplo de botones para la navegación
  buttons = [
    { label: 'Crear Solicitud', route: '/crear-solicitud' },
    { label: 'Listar Mascotas', route: '/listas-mascotas' },
    { label: 'Listar Solicitudes', route: '/listas-solicitudes' },
    { label: 'Agregar Mascota', route: '/agregar-mascota' },
    { label: 'Home', route: '/home' }
  ];
}
