import { ArrowLeft, CircleX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid place-content-center h-[85vh]">
      <h2 className="text-center text-4xl">404 | Not Found</h2>
      <p className="text-center text-2xl">
        No se pudo encontrar el recurso solicitado
      </p>
      <div className="w-full flex justify-center items-center">
        <Link
          href="/"
          className="mt-4 w-72 px-4 py-2 rounded-md flex justify-center items-center gap-2 font-bold hover:bg-orange-100 transition-colors duration-400"
        >
          <ArrowLeft />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
