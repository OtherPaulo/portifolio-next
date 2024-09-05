'use client'

import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { BackgroundEmpresas } from "@/components/ui/backgroun-empresas";

const companies = [
    "Encaixa.ai",
    "Klirva",
    "La Ganexa",
    "Charm & Ricordi",
    "Grupo ICTS",
    "Maxi Made in Brazil",
]

export default function Empresas() {
    const controls = useAnimationControls();
    const [duplicates, setDuplicates] = useState(2);
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
  
      const calculateDuplicates = () => {
        const containerWidth = container.offsetWidth;
        const itemWidth = 240;
        const itemsPerScreen = Math.ceil(containerWidth / itemWidth);
        return itemsPerScreen + 1;
      };
  
      const updateDuplicates = () => {
        setDuplicates(calculateDuplicates());
      };
  
      updateDuplicates();
      window.addEventListener('resize', updateDuplicates);
  
      return () => window.removeEventListener('resize', updateDuplicates);
    }, []);
  
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
  
      const animate = async () => {
        const itemWidth = 240;
        const moveDistance = itemWidth * companies.length;
  
        await controls.start({
          x: -moveDistance,
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        });
      };
  
      animate();
    }, [controls, duplicates]);

  return (
    <section id="servicos" className="w-full overflow-hidden pb-12">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Serviços Prestados:
        </h2>
      </div>
      <div className="relative w-full mx-auto overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex whitespace-nowrap"
          animate={controls}
        >
          {Array(duplicates).fill(companies).flat().map((company, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center w-34 h-8 flex-shrink-0"
            >
            <BackgroundEmpresas className="">
              <span className="flex justify-center items-center px-8">
                {company}
              </span>
            </BackgroundEmpresas>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}