import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../services/mascota.service';
import { Mascota } from '../models/mascota.model';

@Component({
    selector: 'app-mascotas',
    templateUrl: './mascotas.component.html',
    styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
    mascotas: Mascota[] = [];
    nuevaMascota: Mascota = { nombre: '', tipo: '', edad: null };

    constructor(private mascotaService: MascotaService) { }

    ngOnInit(): void {
        this.obtenerMascotas();
    }

    obtenerMascotas() {
        this.mascotaService.obtenerMascotas().subscribe(data => {
            this.mascotas = data;
        });
    }

    agregarMascota() {
        this.mascotaService.agregarMascota(this.nuevaMascota).subscribe(data => {
            this.mascotas.push(data);
            this.nuevaMascota = { nombre: '', tipo: '', edad: null }; // Resetear el formulario
        });
    }
}
