import { Badge } from "@/components/ui/badge";
import { TipoAccion } from "./data-table-types";

interface TipoAccionBadgeProps {
  tipo: TipoAccion;
}

const tipoAccionConfig: Record<
  TipoAccion,
  { label: string; className: string }
> = {
  asesinatos: {
    label: "Asesinatos",
    className: "bg-red-500 text-white hover:bg-red-600",
  },
  atentados: {
    label: "Atentados",
    className: "bg-black text-white hover:bg-orange-600",
  },
  secuestros: {
    label: "Secuestros",
    className: "bg-purple-500 text-white hover:bg-purple-600",
  },
  "robo-armamento-explosivos": {
    label: "Robo Armamento",
    className: "bg-amber-600 text-white hover:bg-amber-700",
  },
  "robo-dinero": {
    label: "Robo Dinero",
    className: "bg-emerald-600 text-white hover:bg-emerald-700",
  },
  "otras-acciones": {
    label: "Otras Acciones",
    className: "bg-slate-500 text-white hover:bg-slate-600",
  },
};

export function TipoAccionBadge({ tipo }: TipoAccionBadgeProps) {
  const config = tipoAccionConfig[tipo] || {
    label: "Desconocido",
    className: "bg-gray-500 text-white hover:bg-gray-600",
  };
  return <Badge className={config.className}>{config.label}</Badge>;
}
