"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full text-[#649269] font-extrabold relative p-4">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link className="transition-all hover:scale-105 font-bold" href="/">
          <Image width={207} height={300} src="/logo.svg" alt="Logo horizontal" />
        </Link>

        {/* Desktop links */}
        <div className="md:flex hidden items-center gap-6">
          <Link href="/#o-que-fazemos" className="hover:scale-105 transition-all">O QUE FAZEMOS</Link>
          <Link href="/#funcoes" className="hover:scale-105 transition-all">FUNÇÕES</Link>
          <Link href="/#precos" className="hover:scale-105 transition-all">PREÇOS</Link>
          <Link href="/#faq" className="hover:scale-105 transition-all">FAQ</Link>
          <Link href="https://linkiwi.vercel.app/" className="text-black font-bold hover:scale-105">LOG IN</Link>
          <Link href="#precos" className="bg-[#649269] text-[#CFE383] border-2 border-[#CFE383] rounded-4xl py-1 px-3 font-bold hover:scale-105 transition-all">INSCREVA-SE</Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden block text-[#649269]"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-6 gap-4 animate-fade-in text-lg">
          <Link href="/#o-que-fazemos" onClick={() => setMobileMenuOpen(false)}>O QUE FAZEMOS</Link>
          <Link href="/#funcoes" onClick={() => setMobileMenuOpen(false)}>FUNÇÕES</Link>
          <Link href="/#precos" onClick={() => setMobileMenuOpen(false)}>PREÇOS</Link>
          <Link href="/#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          <Link href="https://linkiwi.vercel.app/" onClick={() => setMobileMenuOpen(false)} className="text-black font-bold">LOG IN</Link>
          <Link href="#precos" onClick={() => setMobileMenuOpen(false)} className="bg-[#649269] text-[#CFE383] border-2 border-[#CFE383] rounded-4xl py-1 px-2 font-bold transition-all">INSCREVA-SE</Link>
        </div>
      )}

      {/* Hero section */}
      <div className="mt-12 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-8 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Crie sua <span className="underline">Página de Links</span> Profissionais em minutos!
          </h1>
          <p className="text-[#7D8598] text-lg">
            A maneira mais prática, rápida e acessível de criar sua página de links personalizada.
          </p>
          <Link href="#precos" className="cursor-pointer bg-[#649269] text-[#CFE383] px-6 py-3 rounded-3xl shadow-md hover:scale-105 transition-all self-start">
            QUERO ME INSCREVER
          </Link>
        </div>

        {/* Top image only on desktop */}
        <Image className="w-1/2 hidden md:block" width={300} height={300} src="/top-image.svg" alt="Imagem topo" />
      </div>
    </nav>
  );
}