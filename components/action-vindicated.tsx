import { Book } from "@/db/data";
import React from "react";

type Props = {};

export default function ActionVindicated({
  actionVidicated,
}: {
  actionVidicated: { books: Book[] };
}) {
  return (
    <div className="my-10">
      <h3
        className="uppercase text-3xl text-center font-extrabold text-orange-950"
        id="vindicated"
      >
        acciones reivindicadas por los movimientos terroristas
      </h3>

      <p className="py-4">
        Las acciones terroristas del llamado Pasado Reciente son reconocidas y
        reivindicadas por los autores décadas después en libros de circulación
        pública.
      </p>

      {actionVidicated.books.map((book) => (
        <div key={book.name} className="text-base py-2 px-8 bg-orange-50">
          <div
            className="pt-8 bg-orange-50"
            dangerouslySetInnerHTML={{ __html: book.fragment }}
          />
          <p className="bg-orange-50 py-4 text-orange-500">
            {book.author},{" "}
            {book.year && <time>{`${book.year?.getFullYear()},`}</time>}{" "}
            <b>{book.name}</b>, {book.place}, {book.edition}, {book.pages}
          </p>
        </div>
      ))}
    </div>
  );
}
