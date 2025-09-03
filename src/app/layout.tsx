import type { Metadata } from "next";
import Image from 'next/image';
import "./globals.scss";


export const metadata: Metadata = {
  title: "Spiderverse",
  description:
    "Carrosel parallax Aranhaverso com React, Next.js e Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="Opções de menu"
            width={36}
            height={25}
          />
          <Image
          src="/spider-logo.svg" 
          alt="spider-man" 
          width={260}
          height={70}
          />
              <Image
            src="/icons/user.svg"
            alt="Login"
            width={36}
            height={36}
          />
        </header>

        {children}
      </body>
    </html>
  );
}
