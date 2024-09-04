'use client'

import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"

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
    <section className="w-full overflow-hidden py-12">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Serviços Prestados Em:
        </h2>
      </div>
      <div className="relative w-full overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex whitespace-nowrap"
          animate={controls}
        >
          {Array(duplicates).fill(companies).flat().map((company, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center mx-4 w-48 h-24 rounded-lg shadow-md flex-shrink-0"
            >
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center px-2">
                {company}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}