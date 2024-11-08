import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    img: "https://portfolio.devpaulorodrigues.tech/Charm.png",
    url: "https://charmricordi.com/",
    alt: "Charm",
  },
  {
    img: "https://portfolio.devpaulorodrigues.tech/Encaixa.ai.png",
    url: "https://encaixa.ai",
    alt: "Encaixa.ai",
  },
  {
    img: "https://portfolio.devpaulorodrigues.tech/ICTS.png",
    url: "https://grupoicts.com.br",
    alt: "Grupo ICTS",
  },
  {
    img: "https://portfolio.devpaulorodrigues.tech/KLIRVA.png",
    url: "https://https://klirva-klirva-front.w19s7b.easypanel.host/",
    alt: "Klirva",
  },
  {
    img: "https://portfolio.devpaulorodrigues.tech/La Ganexa.png",
    url: "https://lojalaganexa.com.br",
    alt: "La Ganexa",
  },
  {
    img: "https://portfolio.devpaulorodrigues.tech/Maxi Made in Brazil.png",
    url: "https://maximadeinbrazil.com",
    alt: "Maxi Made in Brazil",
  },
  {
    img: "https://portfolio.devpaulorodrigues.tech/Lyna.png",
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

export function Empresas() {
  return (
    <section id="servicos" className="w-full overflow-hidden">
    <div className="mb-2 text-center">
    <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
      Serviços Prestados:
    </h2>
  </div>
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
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
    </div>
    </section>
  );
}

