import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AlignJustify, Apple } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import TailwindIndicator from "@/components/tailwind-inicator";
import Header from "@/components/header";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pasado Reciente",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={jetBrainsMono.className}>
        <Header />

        <main className="">{children}</main>

        <TailwindIndicator />
      </body>
    </html>
  );
}
