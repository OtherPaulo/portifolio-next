"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Safari from "@/components/magicui/safari";
import SafariLP from "@/components/magicui/safariLp";
import SafariLyna from "@/components/magicui/safariLyna";
import { BorderBeam } from "@/components/magicui/border-beam";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export function Servicos() {
  const tabs = [
    {
      title: "SaaS",
      value: "SaaS",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0E0E10]">
          <p className="mb-2">Aplicação completa</p>
          <Safari url="app.devpaulorodrigues.tech" className="size-full" />
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      ),
    },
    {
      title: "Ecommerces",
      value: "Ecommerces",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0E0E10]">
          <p className="mb-2">Loja Virtual</p>
          <SafariLyna url="lojalaganexa.com.br" className="size-full" />
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      ),
    },
    {
      title: "Landing Page",
      value: "Landing Page",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0E0E10]">
          <p className="mb-2">Página de vendas/Institucional</p>
          <SafariLP url="Encaixa.ai" className="size-full" />
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      ),
    },
  ];

  return (
    <motion.section
      id="servicos-tipos"
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div 
        className="text-center mb-12"
        variants={containerVariants}
      >
        <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white mb-4">
          Tipos de Serviços
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Desenvolvo soluções completas para diferentes necessidades do seu negócio
        </p>
      </motion.div>
      
      <motion.div 
        className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-5 mb-12 md:mb-12"
        variants={containerVariants}
      >
        <Tabs tabs={tabs} />
      </motion.div>
    </motion.section>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/landing-page_Paulo-Dev.png"
      alt="Landing Page by Paulo Dev"
      width="1200"
      height="700"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};