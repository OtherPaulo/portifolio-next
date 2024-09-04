import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Home() {
  const words = ["FullStack", "WEB", "Freelancer"];

  return (
    <div className="h-[12rem] flex justify-center items-center px-4">
      <div className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Olá, eu sou Paulo! <br />
        Seu desenvolvedor {" "}
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
