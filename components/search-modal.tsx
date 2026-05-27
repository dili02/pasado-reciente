"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, Loader2, ArrowRight, FileText } from "lucide-react";
import { TerroristActionDefinition } from "@/db/data";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Newsreader } from "next/font/google";
import { searchActions } from "@/lib/search-data";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["400", "800"] });

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<TerroristActionDefinition[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setResults([]);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      try {
        const filtered = searchActions(query);
        setResults(filtered);
      } catch (error) {
        console.error("Error searching actions:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-card border-2 border-primary/20 shadow-2xl rounded-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[70vh]">
        {/* Search Header */}
        <div className="p-4 border-b border-border flex items-center gap-4 bg-muted/30">
          <Search className="w-5 h-5 text-primary" />
          <input
            ref={inputRef}
            type="search"
            aria-label="Buscar acciones terroristas"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar en el archivo histórico..."
            className="flex-1 bg-transparent border-none outline-none text-lg font-bold placeholder:text-muted-foreground/50 tracking-tight"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-primary/20">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                Consultando Hemeroteca...
              </p>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-1">
              <p className="px-3 py-2 text-xs font-black uppercase tracking-[0.3em] text-muted-foreground border-b border-border/50 mb-2">
                Resultados del Archivo ({results.length})
              </p>
              {results.map((action) => (
                <Link
                  key={action.slug}
                  href={`/${action.type}/${action.slug}`}
                  onClick={onClose}
                  className="group flex items-center gap-4 p-3 hover:bg-primary/5 rounded-sm transition-all border border-transparent hover:border-primary/20"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-muted rounded-sm flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black uppercase tracking-widest text-primary px-1.5 py-0.5 border border-primary/30 rounded-full">
                        {action.type.replace(/-/g, " ")}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        {new Date(action.date).getFullYear()}
                      </span>
                    </div>
                    <h4
                      className={`${newsreader.className} text-xl font-black leading-tight tracking-tight group-hover:text-primary transition-colors truncate`}
                    >
                      {action.title}
                    </h4>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          ) : query.trim().length >= 2 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center px-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-muted-foreground/30" />
              </div>
              <p className="text-lg font-bold tracking-tight mb-2">
                No se encontraron registros
              </p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Intente con otras palabras clave o verifique la ortografía de
                los nombres o lugares.
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center px-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Icons.museum className="w-8 h-8 text-muted-foreground/30" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Consejo de Búsqueda
              </p>
              <p className="text-sm font-medium text-muted-foreground max-w-xs">
                Busque por nombre o apellido de la víctima, lugar del hecho,
                etc.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-muted/50 border-t border-border flex justify-between items-center">
          <div className="flex gap-4">
            <div className="hidden md:flex items-center gap-1.5 ">
              <kbd className="px-1.5 py-0.5 text-xs bg-background border border-border rounded shadow-sm font-bold">
                ESC
              </kbd>
              <span className="text-xs font-bold text-muted-foreground uppercase">
                Cerrar
              </span>
            </div>
          </div>
          <div className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">
            Museo de la Memoria | Hemeroteca Digital
          </div>
        </div>
      </div>
    </div>
  );
}
