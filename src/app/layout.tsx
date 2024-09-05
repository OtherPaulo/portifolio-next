import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paulo Dev",
  description: "Seu Desenvolvedor FullStack",
  openGraph: {
    title: "Paulo Dev",
    description: "Seu Desenvolvedor FullStack",
    url: "https://www.portifolio.paulorodrigues.tech", // Coloque o URL do seu site
    siteName: "Paulo Dev",
    images: [
      {
        url: "https://www.portifolio.paulorodrigues.tech/preview.png", // URL da imagem que você quer como preview
        width: 800,
        height: 600,
        alt: "Paulo Dev - FullStack Developer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@seuTwitterHandle",
    title: "Paulo Dev",
    description: "Seu Desenvolvedor FullStack",
    images: ["https://www.portifolio.paulorodrigues.tech/preview.png"], // Mesma imagem ou outra para Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
