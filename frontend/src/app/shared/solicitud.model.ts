export interface Solicitud {
  id_solicitud?: number;
  id_adoptante: number;
  id_mascota: number;
  fecha_solicitud: Date;
  estado_solicitud: string;
}
