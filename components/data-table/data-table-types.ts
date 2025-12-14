export type TipoAccion =
  | "asesinatos"
  | "atentados"
  | "secuestros"
  | "robo-armamento-explosivos"
  | "robo-dinero"
  | "otras-acciones";

export interface AccionTerrorista {
  id: string;
  fecha: string;
  tipoAccion: TipoAccion;
  accion: string;
  completada: boolean;
}
