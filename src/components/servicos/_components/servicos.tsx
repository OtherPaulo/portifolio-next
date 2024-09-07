"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export function Servicos() {
  const tabs = [
    {
      title: "Landing Page",
      value: "Landing Page",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 text-xl md:text-4xl font-bold text-white bg-[#0E0E10]">
          <p>Tenha seu site institucional</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Ecommerces",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "SaaS",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Blogs",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
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
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
