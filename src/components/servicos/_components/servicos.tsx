"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Safari from "@/components/magicui/safari";
import SafariLP from "@/components/magicui/safariLp";
import SafariLyna from "@/components/magicui/safariLyna";

export function Servicos() {
  const tabs = [
    {
      title: "Landing Page",
      value: "Landing Page",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0E0E10]">
          <p className="mb-2">Site institucional</p>
          <SafariLP url="Encaixa.ai" className="size-full" />
        </div>
      ),
    },
    {
      title: "Ecommerces",
      value: "Ecommerces",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0E0E10]">
          <p className="mb-2">Loja Virtual</p>
          <SafariLyna url="lynaesthetic.com.br" className="size-full" />
        </div>
      ),
    },
    {
      title: "SaaS",
      value: "SaaS",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0E0E10]">
          <p className="mb-2">Aplicação completa</p>
          <Safari url="klirva.paulorodrigues.tech" className="size-full" />
        </div>
      ),
    },
    // {
    //   title: "Blogs",
    //   value: "content",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0E0E10]">
    //       <p>Content tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-5 mb-12 md:mb12">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/landing-page_Paulo-Dev.png"
      alt="Landing Page by Paulo Dev"
      width="1200"
      height="700"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
