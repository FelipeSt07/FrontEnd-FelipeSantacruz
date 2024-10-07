import { Component, OnInit } from '@angular/core';
import { Mascota } from '../shared/mascota.model'; // Asegúrate de que la ruta sea correcta
import { MascotaService } from '../shared/mascota.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-listas-mascotas',
  templateUrl: './listas-mascotas.component.html',
  styleUrls: ['./listas-mascotas.component.css']
})
export class ListasMascotasComponent implements OnInit {
  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    // Mascotas por defecto
    this.mascotas = [
      {
        nombre: 'Max',
        especie: 'Perro',
        raza: 'Golden Retriever',
        edad: 3,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUhiCfgS47unNyoj3f1fLzI52AY-n8mGsYw&s',
        estado_adopcion: false // Disponible
      },
      {
        nombre: 'Luna',
        especie: 'Gato',
        raza: 'Siamés',
        edad: 2,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TVebSjjDa06Cguzq7JOOyF9fa35W5q1IVg&s',
        estado_adopcion: false // Disponible
      },
      {
        nombre: 'Rocky',
        especie: 'Perro',
        raza: 'Bulldog',
        edad: 4,
        imagen: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09Bulldog2.jpg?itok=i-myMuFd',
        estado_adopcion: false // Disponible
      }
    ];

    /* // Obtener mascotas del servicio y combinar con las predeterminadas
  this.mascotaService.obtenerMascotas().subscribe(
    (mascotasAgregadas: Mascota[]) => {
      console.log('Mascotas del backend:', mascotasAgregadas);  // Verifica si llegan las mascotas del backend
      this.mascotas = [...mascotasPorDefecto, ...mascotasAgregadas];
    },
    (error) => {
      console.error('Error al obtener mascotas:', error);  // Verifica si hay algún error
    }
  ); */
  }
}
