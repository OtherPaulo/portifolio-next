"use client";
import React from "react";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";

export function Home() {
  const words = ["FullStack", "WEB", "Freelancer"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="h-[6rem] md:h-[16rem] flex justify-center items-center px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="text-[20px] md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
        variants={itemVariants}
      >
        Olá, eu sou Paulo! <br />
        Seu desenvolvedor {" "}
        <FlipWords words={words} /> <br /> <br />
      </motion.div>
    </motion.div>
  );
}