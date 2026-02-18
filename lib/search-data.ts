import { TerroristActionDefinition } from "@/db/data";

// Importar datos directamente para static export
import { TerroristActions } from "@/db/data";

export const getAllActionsForSearch = (): TerroristActionDefinition[] => {
  return TerroristActions;
};

export const searchActions = (query: string): TerroristActionDefinition[] => {
  if (query.trim().length < 2) return [];

  const normalizedQuery = query
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return TerroristActions.filter((action) => {
    const victimsNames =
      action.victims
        ?.map((v) => v.info?.name)
        .filter(Boolean)
        .join(" ") || "";
    const searchStr =
      `${action.title} ${action.type} ${action.fact || ""} ${victimsNames}`
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    return searchStr.includes(normalizedQuery);
  });
  // }).slice(0, 10);
};
