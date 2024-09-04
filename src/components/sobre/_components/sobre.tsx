"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";

export function Sobre() {
  return (
      <div className="flex justify-center items-center min-h-[16rem] px-4 md:px-12 z-[9999] relative mb-12">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto mb-6">
              Atualmente sou Co-Founder na{" "}
              <LinkPreview url="https://encaixa.ai" className="font-bold">
                Encaixa.ai
              </LinkPreview>{" "}
              e estou desenvolvendo um novo micro-saas chamado{" "}
              <LinkPreview url="https://klirva.paulorodrigues.tech" className="font-bold">
                Klirva,
              </LinkPreview>{" "}
              uma solução moderna e acessivel para ecommerces.
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto">
              Visite meu{" "}
              <LinkPreview
                url="https://paulorodrigues.tech"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                Link-Bio
              </LinkPreview>{" "}
              e acompanhe meus projetos que serão listados.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
            <Image
              src="/working.png?height=300&width=300"
              alt="Imagem ilustrativa"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
            </BackgroundGradient>
          </div>
        </div>
      </div>
  );
}