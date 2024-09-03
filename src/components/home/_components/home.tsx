import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Home() {
  const words = ["FullStack", "WEB", "Freelancer"];

  return (
    <div className="h-[12rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Olá, eu sou Paulo! <br />
        Seu desenvolvedor
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
