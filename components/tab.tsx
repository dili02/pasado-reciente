"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import { AlertTriangle, Calendar } from "lucide-react";

type Props = {};

const navItems = [
  { name: "Asesinatos", icon: <AlertTriangle className="w-4 h-4" /> },
  { name: "Atentados", icon: <AlertTriangle className="w-4 h-4" /> },
  { name: "Secuestros", icon: <AlertTriangle className="w-4 h-4" /> },
  { name: "Robos", icon: <AlertTriangle className="w-4 h-4" /> },
];

export default function Tab({}: Props) {
  const [activeTab, setActiveTab] = React.useState("resumen");
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger
          value="resumen"
          className="data-[state=active]:bg-slate-800 data-[state=active]:text-white"
        >
          Cronología
        </TabsTrigger>
        <TabsTrigger
          value="acciones"
          className="data-[state=active]:bg-slate-800 data-[state=active]:text-white"
        >
          Eventos
        </TabsTrigger>
      </TabsList>
      <TabsContent value="resumen">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972].map(
            (year) => (
              <Button
                key={year}
                variant="outline"
                className="h-16 text-slate-700 border-slate-300 hover:bg-slate-100"
              >
                <Calendar className="mr-2 h-4 w-4" /> {year}
              </Button>
            )
          )}
        </div>
      </TabsContent>
      <TabsContent value="acciones">
        <div className="grid grid-cols-2 gap-4">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-16 text-red-600 border-red-200 hover:bg-red-50"
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Button>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
