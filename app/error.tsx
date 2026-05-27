"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Algo salió mal</h2>
        <p className="text-muted-foreground mb-4">
          Ha ocurrido un error inesperado.
        </p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
