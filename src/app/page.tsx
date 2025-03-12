'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqItems = [
  {
    question: "Para quem é?",
    answer: "Nosso serviço é ideal para criadores de conteúdo, empresas e profissionais que desejam criar páginas personalizadas de forma rápida e intuitiva.",
  },
  {
    question: "O que é Drag & Drop?",
    answer: "Drag & Drop é uma funcionalidade que permite arrastar e soltar elementos na tela para criar sua página de maneira fácil e sem precisar programar.",
  },
  {
    question: "Qual formato dos arquivos ao exportar?",
    answer: "Ao exportar seu site, você receberá os arquivos no formato HTML, CSS e JavaScript, prontos para serem hospedados no seu próprio domínio.",
  },
  {
    question: "Posso criar mais de um perfil na minha conta?",
    answer: "Sim! Dependendo do seu plano, você pode criar múltiplos perfis e gerenciar diversas páginas dentro de uma única conta.",
  },
  {
    question: "Após exportar, o site é meu?",
    answer: "Sim, ao exportar seu site, você tem total controle sobre os arquivos e pode hospedá-los onde quiser.",
  },
  {
    question: "O que é o código de rastreamento da Meta e Google Ads?",
    answer: "São códigos usados para rastrear visitantes e medir o desempenho de anúncios pagos no Facebook (Meta) e Google Ads.",
  }
];

export default function Home() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col  w-full">
      {/* Hero Section */}
      <section className="w-full bg-white py-16 flex flex-col items-center text-center ps-20">
        <nav className="w-full flex text-[#649269] items-start justify-between font-extrabold relative gap-10 md:flex-nowrap flex-wrap">
          <div className="flex flex-col gap-20">

            <div className="flex items-center gap-16 md:flex-nowrap flex-wrap">
              <Link className="transition-all hover:scale-105" href="/">
                <Image width={207} height={300} src="/logo.svg" alt="Logo horizontal" />
              </Link>

              <div className="flex gap-4 items-center md:flex-nowrap flex-wrap">
                <Link className="transition-all hover:scale-105" href="/#o-que-fazemos">O QUE FAZEMOS</Link>
                <Link className="transition-all hover:scale-105" href="/#funcoes">FUNÇÕES</Link>
                <Link className="transition-all hover:scale-105" href="/#precos">PREÇOS</Link>
                <Link className="transition-all hover:scale-105" href="/#faq">FAQ</Link>
                <Link href="https://linkiwi.vercel.app/login" className="md:hidden flex text-black font-bold transition-all hover:scale-105">LOG IN</Link>
                <Link href="https://linkiwi.vercel.app/register" className="md:hidden flex bg-[#649269] text-[#CFE383] border-2 border-[#CFE383] rounded-4xl py-1 px-2 font-bold transition-all hover:scale-105">INSCREVA-SE</Link>
              </div>

            </div>
            <div className="flex flex-col justify-between gap-10">
              <div className="flex flex-col gap-4 items-start justify-start text-start">
                <h1 className="text-6xl font-bold text-[#649269]">
                  Crie sua <span className="underline">Página de Links</span> Profissionais em minutos!
                </h1>
                <p className="text-[#7D8598] max-w-2xl mt-4 font-normal text-lg">
                  A maneira mais prática, rápida e acessível de criar sua página de links personalizada.
                </p>
              </div>
              <Link href="https://linkiwi.vercel.app/" className="cursor-pointer bg-[#649269] text-[#CFE383] px-6 py-3 rounded-md shadow-md hover:scale-105 transition-all flex self-start">
                QUERO ME INSCREVER
              </Link>
            </div>

          </div>

          <Image className="w-1/2 md:block hidden" width={300} height={300} src="/top-image.svg" alt="Imagem topo" />

          <div className="md:flex hidden gap-4 md:absolute top-0 end-30 items-center">
            <Link href="https://linkiwi.vercel.app/login" className="text-black font-bold transition-all hover:scale-105">LOG IN</Link>
            <Link href="https://linkiwi.vercel.app/register" className="bg-[#649269] text-[#CFE383] border-2 border-[#CFE383] rounded-4xl py-1 px-2 font-bold transition-all hover:scale-105">INSCREVA-SE</Link>
          </div>
        </nav>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-20 w-full bg-[#CFE383] text-center flex flex-col gap-10">
        <div className="flex justify-between text-[#649269] text-left md:flex-nowrap flex-wrap">
          <h2 className="text-5xl font-bold">Simples, Rápido e sem Complicação!</h2>
          <span className="w-2/3">Diferente de outras ferramentas, aqui você tem total liberdade para personalizar sua página do seu jeito.
            Com apenas alguns cliques, você cria uma página de links
            <span className="font-extrabold">Bonita, Responsiva e otimizada para conversão.</span></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-md p-4 rounded-3xl border">
            <div className="flex justity-between gap-10">
              <Image unoptimized className="object-contain" alt="Logo Organização" width={84} height={54} src="/1.png" />
              <div className="flex flex-col items-start text-start">
                <h3 className="pb-0 text-lg font-medium text-[#649269]">Organização</h3>
                <p className="text-gray-600 text-sm mt-2">Organize todos os seus links em um só lugar de forma profissional.</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-3xl border">
            <div className="flex justity-between gap-10">
              <Image unoptimized className="object-contain" alt="Logo Personalização" width={84} height={54} src="/2.png" />
              <div className="flex flex-col items-start text-start">
                <h3 className="pb-0 text-lg font-medium text-[#649269]">Personalização</h3>
                <p className="text-gray-600 text-sm mt-2">Personalize cores, fontes e estilos com nosso editor Drag & Drop.</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-3xl border">
            <div className="flex justity-between gap-10">
              <Image unoptimized className="object-contain" alt="Logo Exportação" width={84} height={54} src="/3.png" />
              <div className="flex flex-col items-start text-start">
                <h3 className="pb-0 text-lg font-medium text-[#649269]">Exportação</h3>
                <p className="text-gray-600 text-sm mt-2">Exporte sua página para o seu próprio dominio e ter um site 100% seu.</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-3xl border">
            <div className="flex justity-between gap-10">
              <Image unoptimized className="object-contain" alt="Logo Pixel" width={84} height={54} src="/4.png" />
              <div className="flex flex-col items-start text-start">
                <h3 className="pb-0 text-lg font-medium text-[#649269]">Instalar Pixel</h3>
                <p className="text-gray-600 text-sm mt-2">Pixel do Facebook e Google para rastrear e otimizar suas campanhas.</p>
              </div>
            </div>
          </div >
          <div className="bg-white shadow-md p-4 rounded-3xl border">
            <div className="flex justity-between gap-10">
              <Image unoptimized className="object-contain" alt="Logo Sociais" width={84} height={54} src="/5.png" />
              <div className="flex flex-col items-start text-start">
                <h3 className="pb-0 text-lg font-medium text-[#649269]">Redes Sociais</h3>
                <p className="text-gray-600 text-sm mt-2">Integração com redes sociais, Whatsapp, Youtube e muito mais.</p>
              </div>
            </div>
          </div >
          <div className="bg-white shadow-md p-4 rounded-3xl border">
            <div className="flex justity-between gap-10">
              <Image unoptimized className="object-contain" alt="Logo Responsivo" width={84} height={54} src="/6.png" />
              <div className="flex flex-col items-start text-start">
                <h3 className="pb-0 text-lg font-medium text-[#649269]">Responsivo</h3>
                <p className="text-gray-600 text-sm mt-2">Site adaptado para Desktop, tablet e celulares.</p>
              </div>
            </div>
          </div >
        </div >
      </section >

      {/* Por que ter uma Página de Links? */}
      < section className="py-16 px-6 text-center text-[#649269] bg-white flex flex-col items-center" >
        <h2 className="text-5xl font-bold ">Por que ter uma Página de Links?</h2>
        <p className="font-bold mt-10 max-w-[600px] text-start">Se você usa redes sociais para divulgar seus produtos, serviços ou conteúdos, sabe o quanto é frustrante ter apenas um link na bio.
          <br /><br />
          Com a nossa ferramenta, você pode centralizar tudo o que realmente importa em um só lugar, aumentando suas conversões e facilitando a jornada do seu público
        </p>
        <Image src="/mockup.png" width={600} height={500} alt="Preview" className="mt-6" />
        <Link href="https://linkiwi.vercel.app/" className="mt-10 cursor-pointer bg-[#649269] text-[#CFE383] px-30 py-3 rounded-3xl shadow-md hover:scale-105 transition-all">
          EU QUERO
        </Link>
      </section >

      {/* Preços */}
      <section className="py-16 px-6 bg-[#CFE383] text-center">
        <h2 className="text-3xl font-bold text-black">PREÇOS</h2>
        <span className="text-lg font-medium text-gray-500">Escolha seu plano favorito</span>

        <div className="flex flex-wrap gap-6 mt-6 justify-center">

          {/* FREE */}
          <div className="bg-white w-[400px] shadow-md p-6 rounded-lg flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold bg-[#FFF1E5] text-black flex place-self-center px-2 py-1 rounded-lg">FREE</h3>
              <ul className="mt-4 text-gray-600 text-sm space-y-2">
                <li>✔ Custom URL</li>
                <li>✔ Acesso a estatísticas básicas</li>
                <li>✔ Suporte via email</li>
                <li>✔ Até 4 componentes</li>
                <li>🚫 Sem exportação do site</li>
                <li>🚫 Sem pixel de tráfego pago</li>
                <li>🚫 Marca d’água presente</li>
              </ul>
            </div>
            <button className="flex self-center mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 cursor-pointer">
              Escolher
            </button>
          </div>

          {/* BASIC */}
          <div className="bg-white w-[400px] shadow-md p-6 rounded-lg flex flex-col justify-between">
            <div className="flex flex-col gap-2">

              <h3 className="font-bold bg-[#FFE5E5] text-black flex place-self-center px-2 py-1 rounded-lg">BASIC</h3>
              <ul className="mt-4 text-gray-600 text-sm space-y-2">
                <li>✔ Custom URL</li>
                <li>✔ Acesso a estatísticas avançadas</li>
                <li>✔ Suporte via email</li>
                <li>✔ Até 16 componentes</li>
                <li>✔ Templates adicionais</li>
                <li>✔ Permite vídeos/GIFs nos botões</li>
                <li>🚫 Sem exportação do site</li>
                <li>🚫 Sem pixel de tráfego pago</li>
                <li>🚫 Marca d’água presente</li>
              </ul>
            </div>
            <button className="flex self-center mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-red-700 cursor-pointer">
              Escolher
            </button>
          </div>

          {/* PREMIUM */}
          <div className="bg-white w-[400px] shadow-lg p-6 rounded-lg flex flex-col justify-between">
            <div className="flex flex-col gap-2">

              <h3 className="font-bold bg-[#FFDE59] text-black flex place-self-center px-2 py-1 rounded-lg">PREMIUM</h3>
              <ul className="mt-4 text-gray-600 text-sm space-y-2">
                <li>✔ Custom URL</li>
                <li>✔ Acesso a estatísticas avançadas</li>
                <li>✔ Suporte prioritário via chat + email</li>
                <li>✔ Componentes ilimitados</li>
                <li>✔ Exportação do site para domínio próprio</li>
                <li>✔ Pixel de tráfego pago (Meta, Google Ads, etc.)</li>
                <li>✔ Sem marca d’água</li>
                <li>✔ Templates premium e personalizáveis</li>
                <li>✔ Personalização CSS avançada</li>
                <li>✔ Conexão de domínio próprio</li>
                <li>✔ Backup e restauração</li>
                <li>✔ Integração com email marketing</li>
                <li>✔ Integração com WhatsApp, Instagram Bio, Google Analytics</li>
              </ul>
            </div>
            <button className="flex self-center mt-6 bg-lime-500 text-white px-6 py-2 rounded-md hover:bg-yellow-700 cursor-pointer">
              Escolher
            </button>
          </div>

        </div>
      </section>

      <section className="py-16 px-6 bg-white text-center text-[#649269]">
        <h2 className="text-3xl font-bold">FAQ</h2>

        <div className="max-w-3xl mx-auto mt-6">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-3">
              <button
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer w-full flex justify-between items-center border text-[#649269] text-left p-4 rounded-lg focus:outline-none"
              >
                <span className="text-lg">{item.question}</span>
                <ChevronDownIcon
                  className={`w-6 h-6 transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-max-height duration-[400ms] ease-in-out ${openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
              >
                <div className="bg-[#FAFAFA] text-[#649269] p-4 rounded-b-lg mt-1 text-start">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      < section className="w-full bg-[#649269] text-[#CFE383] py-16 text-center px-20 flex justify-between items-center md:flex-nowrap flex-wrap" >
        <div className="flex flex-col items-start gap-4 max-w-[500px] text-start">
          <h2 className="text-5xl font-semibold">Comece a interagir com seu público!</h2>
          <p className="text-white/90 text-lg  ">Construa sua página de links agora mesmo e aumente sua presença digital.</p>
        </div>
        <Link href="https://linkiwi.vercel.app/" className="bg-transparent text-[#CFE383] border-2 border-[#CFE383] px-6 py-3 rounded-3xl shadow-md hover:scale-105 transition-all">Comece agora</Link>
      </section >
    </div >
  );
}
