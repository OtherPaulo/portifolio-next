"use client";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  } from "@radix-ui/react-icons";
  
  import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
  
  const features = [
  {
    Icon: FileTextIcon,
    name: "Klirva",
    description: "Construção de um sistema de video commerce",
    href: "/",
    cta: "Ver Projeto",
    background: (
    <img
      src="" // Substitua pelo link da imagem ou caminho local
      alt="Imagem de fundo"
      className=" opacity-60"
    />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Pesquisa de texto completo",
    description: "Pesquise em todos os seus arquivos em um só lugar.",
    href: "http://",
    cta: "Ver Projeto",
    background: (
    <img
      src="" // Substitua pelo link da imagem ou caminho local
      alt="Imagem de fundo"
      className="absolute opacity-60"
    />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Charm & Ricordi",
    description: "Loja de Jóias em nível Internacional",
    href: "https://charmricordi.com/",
    cta: "Ver Projeto",
    background: (
    <img
      src="" // Substitua pelo link da imagem ou caminho local
      alt="Imagem de fundo"
      className="absolute opacity-60"
    />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendário",
    description: "Use o calendário para filtrar seus arquivos por data.",
    href: "/",
    cta: "Ver Projeto",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notificações",
    description:
    "Receba notificações quando alguém compartilhar um arquivo ou mencionar você em um comentário.",
    href: "/",
    cta: "Ver Projeto",
    background: (
    <img
      src="" // Substitua pelo link da imagem ou caminho local
      alt="Imagem de fundo"
      className="absolute opacity-60"
    />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  ];
  
  export function Projetos() {
    return (
        <section id="projetos">
        <div className="mt-32 mb-2 text-center">
    <h2 className="text-2xl mt-12 md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
      Projetos:
    </h2>
  </div>
    <BentoGrid className="lg:grid-rows-3 text-white black:text-black max-w-7xl mx-auto p-4">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
    </section>
    );
  }
  