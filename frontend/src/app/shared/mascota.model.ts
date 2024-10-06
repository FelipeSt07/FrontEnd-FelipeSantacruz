export interface Mascota {
  id_mascota?: number | null; // El signo ? indica que es opcional
  nombre: string;
  especie: string;
  raza: string;
  edad: number | null;
  estado_adopcion: boolean | number;
}
