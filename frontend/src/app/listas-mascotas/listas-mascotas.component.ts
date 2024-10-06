import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../shared/mascota.service';
import { Mascota } from '../shared/mascota.model';

@Component({
  selector: 'app-listas-mascotas',
  templateUrl: './listas-mascotas.component.html',
  styleUrls: ['./listas-mascotas.component.css']
})
export class ListasMascotasComponent implements OnInit {
  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.loadMascotas();
  }

  loadMascotas(): void {
    this.mascotaService.getMascotas().subscribe((data: Mascota[]) => {
      this.mascotas = data;
    });
  }
}
