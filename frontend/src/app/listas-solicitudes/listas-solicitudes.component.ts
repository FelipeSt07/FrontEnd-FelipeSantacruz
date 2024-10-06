import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../shared/solicitud.service';
import { Solicitud } from '../shared/solicitud.model';

@Component({
  selector: 'app-listas-solicitudes',
  templateUrl: './listas-solicitudes.component.html',
  styleUrls: ['./listas-solicitudes.component.css']
})
export class ListasSolicitudesComponent implements OnInit {
  solicitudes: Solicitud[] = [];

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit(): void {
    this.loadSolicitudes();
  }

  loadSolicitudes(): void {
    this.solicitudService.getSolicitudes().subscribe((data: Solicitud[]) => {
      this.solicitudes = data;
    });
  }
}
