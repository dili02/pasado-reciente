import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container">
      <nav className="flex justify-center items-center text-primary">
        <Link href="/robos/dinero">robo dinero</Link>
        <Link href="/robos/armas">robo armas</Link>
        <Link href="/robos/explosivos">robo explosivos</Link>
      </nav>

      <div>{children}</div>
    </div>
  );
}
