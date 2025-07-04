"use client"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import { Home } from "@/components/home/_components/home"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Sobre } from "@/components/sobre/_components/sobre"
import { Servicos } from "@/components/servicos/_components/servicos"
import Chat from "@/components/chat/_components/chat"
import HyperText from "@/components/magicui/hyper-text"
import { Empresas } from "@/components/empresas/_components/empresas"
import { Experiencias } from "@/components/experiencias/_components/experiencias"
import Footer from "@/components/footer/_components/footer"
import Contato from "@/components/contato/_components/contato"

export default function Component() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="flex h-20 w-4/5 mx-auto items-center justify-between">
        <Link href="#" className="flex items-center gap-2 text-lg font-bold" prefetch={false}>
        <HyperText
      className="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
      text="Paulo Dev"
    />
        </Link>
        <nav className="hidden lg:flex max-w-fit inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[9999] pr-2 pl-8 py-2 items-center justify-center space-x-4">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Início
          </Link>
          <Link href="#servicos" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Serviços
          </Link>
          <Link href="#experiencias" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Experiência
          </Link>
          <Link href="#contato" className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <span>{"Contato"}</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </Link>
        </nav>
        <div className="hidden lg:flex items-center">
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Theme</span>
        </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="z-[9999]">
            <div className="grid gap-4 py-6">
              <Link href="#" className="flex items-center gap-2 text-lg font-medium" prefetch={false}>
                Início
              </Link>
              <Link href="#servicos" className="flex items-center gap-2 text-lg font-medium" prefetch={false}>
              Serviços
              </Link>
              <Link href="#experiencias" className="flex items-center gap-2 text-lg font-medium" prefetch={false}>
                Experiência
              </Link>
              <Link href="#contato" className="flex items-center gap-2 text-lg font-medium" prefetch={false}>
                Contato
              </Link>
              <Button variant="outline" size="icon" onClick={toggleTheme}>
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Theme</span>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <Home />
      <Sobre />
      <Empresas />
      <Experiencias />
      <Servicos />
      
      <Contato />
      <Footer />
      <Chat />
    </>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}