import { Component } from '@angular/core';
import { SolicitudService } from '../shared/solicitud.service';
import { Solicitud } from '../shared/solicitud.model';
import { MascotaService } from '../shared/mascota.service';
import { Mascota } from '../shared/mascota.model';
import { Adoptante } from '../shared/adoptante.model';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent {
  nuevaSolicitud: Solicitud = {
    id_adoptante: null,
    id_mascota: null,
    fecha_solicitud: new Date(),
    estado_solicitud: 'Pendiente'
  };

  mascotas: Mascota[] = [];
  adoptantes: Adoptante[] = [];

  constructor(private solicitudService: SolicitudService, private mascotaService: MascotaService) {
    this.cargarMascotas();
    // Aquí puedes cargar los adoptantes si tienes un servicio para ello
  }

  cargarMascotas() {
    this.mascotaService.obtenerMascotas().subscribe(mascotas => {
      this.mascotas = mascotas;
    }, error => {
      console.error('Error al cargar mascotas:', error);
    });
  }

  crearSolicitud() {
    this.solicitudService.crearSolicitud(this.nuevaSolicitud).subscribe(response => {
      console.log('Solicitud creada:', response);
      // Reiniciar el formulario
      this.nuevaSolicitud = {
        id_adoptante: null,
        id_mascota: null,
        fecha_solicitud: new Date(),
        estado_solicitud: 'Pendiente'
      };
    }, error => {
      console.error('Error al crear solicitud:', error);
    });
  }
}
