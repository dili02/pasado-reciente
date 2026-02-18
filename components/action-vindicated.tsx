import { Book } from "@/db/data";
import { BookOpenCheck, Quote } from "lucide-react";
import React from "react";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

export default function ActionVindicated({
  actionVidicated,
}: {
  actionVidicated: { books: Book[] };
}) {
  return (
    <div className="space-y-12 py-12">
      <header className="flex items-center gap-4 border-b border-foreground pb-2 mb-8">
        <BookOpenCheck className="w-8 h-8 text-primary hidden lg:block" />
        <h2
          className={`${newsreader.className} text-3xl font-black uppercase tracking-tighter`}
        >
          Reivindicaciones de la Época
        </h2>
      </header>

      <p className="text-lg text-muted-foreground italic leading-relaxed mb-12">
        Las acciones terroristas del llamado Pasado Reciente son reconocidas y
        reivindicadas por los autores décadas después en libros de circulación
        pública.
      </p>

      <div className="space-y-12">
        {actionVidicated.books.map((book, index) => (
          <article
            key={index}
            className="relative bg-muted/40 p-8 rounded-sm border border-border/50 shadow-sm"
          >
            <Quote className="absolute top-4 right-4 w-12 h-12 text-primary opacity-5 group-hover:opacity-10 transition-opacity" />

            <div
              className={`${newsreader.className} text-xl leading-relaxed italic mb-8 relative z-10`}
              dangerouslySetInnerHTML={{ __html: book.fragment }}
            />

            <footer className="pt-6 border-t border-border/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] lg:text-[12px] font-black uppercase tracking-widest text-primary block">
                    Referencia Bibliográfica
                  </span>
                  <p className="text-[10px] lg:text-[12px] uppercase font-bold">
                    {book.author} ({book.year?.getFullYear()}).
                    <br />
                    <span className="italic text-[10px] lg:text-[12px] uppercase">
                      {book.name}
                    </span>
                    .
                  </p>
                </div>
                <div className="text-[10px] lg:text-[12px] font-medium text-muted-foreground uppercase tracking-widest text-right">
                  {book.place} <br /> {book.edition} <br /> {book.pages}
                </div>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
