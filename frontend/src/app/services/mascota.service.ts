import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../models/mascota.model';

@Injectable({
    providedIn: 'root'
})
export class MascotaService {
    private apiUrl = 'http://localhost:3000/mascotas'; // URL de tu API

    constructor(private http: HttpClient) { }

    obtenerMascotas(): Observable<Mascota[]> {
        return this.http.get<Mascota[]>(this.apiUrl);
    }

    agregarMascota(mascota: Mascota): Observable<Mascota> {
        return this.http.post<Mascota>(this.apiUrl, mascota);
    }
}
