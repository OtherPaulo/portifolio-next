import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paulo Dev",
  description: "Seu Desenvolvedor FullStack",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    {
      name: "Paulo",
      url: "https://portfolio.devpaulorodrigues.tech",
    },
  ],
  openGraph: {
    title: "Paulo Dev",
    description: "Seu Desenvolvedor FullStack",
    images: [
      {
        url: "https://portfolio.devpaulorodrigues.tech/image.png",
        alt: "Paulo Rodrigues",
      }
    ],
    authors: "Paulo",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
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
