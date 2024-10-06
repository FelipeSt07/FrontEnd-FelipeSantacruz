import { Component } from '@angular/core';
import { SolicitudService } from '../shared/solicitud.service';
import { Solicitud } from '../shared/solicitud.model';
import { MascotaService } from '../shared/mascota.service';
import { Mascota } from '../shared/mascota.model';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent {
  nuevaSolicitud: Solicitud = {
    id_adoptante: null, // Si no utilizas adoptante, puedes eliminar esta línea en tu base de datos o gestionarla de otra forma
    id_mascota: null,
    fecha_solicitud: new Date(),
    estado_solicitud: 'Pendiente'
  };

  mascotas: Mascota[] = [];

  constructor(private solicitudService: SolicitudService, private mascotaService: MascotaService) {
    this.cargarMascotas();
  }

  cargarMascotas() {
    this.mascotaService.obtenerMascotas().subscribe(mascotas => {
      this.mascotas = mascotas;
    }, error => {
      console.error('Error al cargar mascotas:', error);
    });
  }

  crearSolicitud() {
    // Si no tienes adoptantes, podrías dejarlo como null o manejarlo de otra manera
    this.nuevaSolicitud.id_adoptante = null;

    this.solicitudService.agregarSolicitud(this.nuevaSolicitud).subscribe(response => {
      console.log('Solicitud creada:', response);
      // Reiniciar el formulario
      this.nuevaSolicitud = {
        id_adoptante: null, // Aquí también podrías omitir este campo si no se utiliza
        id_mascota: null,
        fecha_solicitud: new Date(),
        estado_solicitud: 'Pendiente'
      };
    }, error => {
      console.error('Error al crear solicitud:', error);
    });
  }
}
