import { Book } from "@/db/data";
import React from "react";

type Props = {};

export default function ActionVindicated({
  actionVidicated,
}: {
  actionVidicated: { books: Book[] };
}) {
  return (
    <div className="py-10">
      <h3 className="uppercase text-xl md:text-4xl 2xl:text-4xl text-center font-extrabold">
        acciones reivindicadas por los movimientos terroristas
      </h3>

      <p className="text-base md:text-xl py-6 text-textPrimary">
        Las acciones terroristas del llamado Pasado Reciente son reconocidas y
        reivindicadas por los autores décadas después en libros de circulación
        pública.
      </p>

      {actionVidicated.books.map((book) => (
        <div
          key={book.name}
          className="text-base md:text-xl py-2 px-8 text-textPrimary bg-orange-100"
        >
          <div
            className="text-justify pt-8 bg-orange-100"
            dangerouslySetInnerHTML={{ __html: book.fragment }}
          />
          <p className="bg-orange-100 py-4">
            {book.author}, <time>{book.year.getFullYear()}</time>,{" "}
            <b>{book.name}</b>, {book.place}, {book.edition}, {book.pages}
          </p>
        </div>
      ))}
    </div>
  );
}
