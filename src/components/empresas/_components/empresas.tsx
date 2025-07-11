"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { useTranslations } from 'next-intl';

const reviews = [
  {
    img: "/Charm.png",
    url: "https://charmricordi.com/",
    alt: "Charm",
  },
  {
    img: "/Encaixa.ai.png",
    url: "https://encaixa.ai",
    alt: "Encaixa.ai",
  },
  {
    img: "/ICTS.png",
    url: "https://grupoicts.com.br",
    alt: "Grupo ICTS",
  },
  {
    img: "/KLIRVA.png",
    url: "https://app.devpaulorodrigues.tech/",
    alt: "Klirva",
  },
  {
    img: "/La Ganexa.png",
    url: "https://lojalaganexa.com.br",
    alt: "La Ganexa",
  },
  {
    img: "/Maxi Made in Brazil.png",
    url: "https://maximadeinbrazil.com",
    alt: "Maxi Made in Brazil",
  },
  {
    img: "/Lyna.png",
    url: "https://lynaesthetic.com.br",
    alt: "LynaEsthetic",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  url,
  alt,
}: {
  img: string;
  url: string;
  alt: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-25 md:w-64 cursor-pointer overflow-hidden rounded-xl p-4",
      )}
    >
      <div className="flex flex-row items-center">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={alt} />
        </a>
      </div>
    </figure>
  );
};

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

export function Empresas() {
  const t = useTranslations('companies');
  
  return (
    <motion.section 
      id="servicos" 
      className="w-full overflow-hidden py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div 
        className="mb-8 text-center"
        variants={containerVariants}
      >
        <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </motion.div>
      
      <motion.div 
        className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg"
        variants={containerVariants}
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.img} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.img} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l "></div>
      </motion.div>
    </motion.section>
  );
}