export interface Mascota {
  id_mascota?: number; // El signo ? indica que es opcional
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  estado_adopcion: boolean;
}
