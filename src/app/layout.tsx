import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linkiwi",
  description: "Crie sua página de links profissionais em minutos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/icon-linkiwi.png" />
      </head>
      <body
        className={`${karla.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
