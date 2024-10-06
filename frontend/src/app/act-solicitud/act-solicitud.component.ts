import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../shared/solicitud.service';
import { Solicitud } from '../shared/solicitud.model';

@Component({
  selector: 'app-act-solicitud',
  templateUrl: './act-solicitud.component.html',
  styleUrls: ['./act-solicitud.component.css']
})
export class ActSolicitudComponent implements OnInit {
  solicitudes: Solicitud[] = [];
  solicitudSeleccionada: Solicitud | null = null;

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit(): void {
    this.obtenerSolicitudes();
  }

  obtenerSolicitudes(): void {
    this.solicitudService.obtenerSolicitudes().subscribe(data => {
      this.solicitudes = data;
    });
  }

  actualizarSolicitud(solicitud: Solicitud): void {
    this.solicitudService.actualizarSolicitud(solicitud).subscribe(data => {
      alert('Solicitud actualizada con éxito');
    });
  }

  seleccionarSolicitud(solicitud: Solicitud): void {
    this.solicitudSeleccionada = solicitud;
  }
}
