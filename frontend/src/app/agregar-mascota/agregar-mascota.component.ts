import { Component } from '@angular/core';
import { MascotaService } from '../shared/mascota.service';
import { Mascota } from '../shared/mascota.model';

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent {
  nuevaMascota: Mascota = {
    nombre: '',
    especie: '',
    raza: '',
    edad: null,
    estado_adopcion: 0,
    imagen: 'https://example.com/fido.jpg'
  };

  constructor(private mascotaService: MascotaService) {}

  agregarMascota() {
    this.mascotaService.agregarMascota(this.nuevaMascota).subscribe(response => {
      console.log('Mascota agregada:', response);
      // Reiniciar el formulario
      this.nuevaMascota = {
        nombre: '',
        especie: '',
        raza: '',
        edad: null,
        estado_adopcion: 0,
        imagen: 'https://example.com/fido.jpg'
      };
    }, error => {
      console.error('Error al agregar mascota:', error);
    });
  }
}
