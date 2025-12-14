"use client";

import { AccionTerrorista } from "./data-table-types";

const STORAGE_KEY = "pasado-reciente";

export const accionesStorage = {
  get: (): AccionTerrorista[] => {
    if (typeof window === "undefined") return [];
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error al leer del localStorage:", error);
      return [];
    }
  },

  set: (acciones: AccionTerrorista[]): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(acciones));
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  },

  add: (accion: AccionTerrorista): void => {
    const acciones = accionesStorage.get();
    acciones.push(accion);
    accionesStorage.set(acciones);
  },

  update: (id: string, updates: Partial<AccionTerrorista>): void => {
    const acciones = accionesStorage.get();
    const index = acciones.findIndex((a) => a.id === id);
    if (index !== -1) {
      acciones[index] = { ...acciones[index], ...updates };
      accionesStorage.set(acciones);
    }
  },

  delete: (id: string): void => {
    const acciones = accionesStorage.get();
    const filtered = acciones.filter((a) => a.id !== id);
    accionesStorage.set(filtered);
  },
};
