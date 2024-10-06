export interface Solicitud {
  id_solicitud?: number;
  id_adoptante: number | null;
  id_mascota: number | null;
  fecha_solicitud: Date;
  estado_solicitud: string;
}
