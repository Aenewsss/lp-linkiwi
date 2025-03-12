import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
                <Link href="https://linkiwi.vercel.app/" className="md:hidden flex text-black font-bold transition-all hover:scale-105">LOG IN</Link>
                <Link href="https://linkiwi.vercel.app/" className="md:hidden flex bg-[#649269] text-[#CFE383] border-2 border-[#CFE383] rounded-4xl py-1 px-2 font-bold transition-all hover:scale-105">INSCREVA-SE</Link>
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
            <Link href="https://linkiwi.vercel.app/" className="text-black font-bold transition-all hover:scale-105">LOG IN</Link>
            <Link href="https://linkiwi.vercel.app/" className="bg-[#649269] text-[#CFE383] border-2 border-[#CFE383] rounded-4xl py-1 px-2 font-bold transition-all hover:scale-105">INSCREVA-SE</Link>
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
      {/* < section className="py-16 px-6 bg-[#CFE383] text-center" >
        <h2 className="text-3xl font-semibold text-black">Preços</h2>
        <span className="text-3xl font-semibold text-gray-800">Escolha seu plano favorito</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-md p-6 rounded-lg border">
            <h3 className="text-xl font-bold text-[#649269 ]">FREE</h3>
            <ul className="mt-4 text-gray-600 text-sm space-y-2">
              <li>✔ Custom URL</li>
              <li>✔ Acesso a estatísticas</li>
              <li>✔ Suporte via email</li>
            </ul>
            <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Escolher
            </button>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg border">
            <h3 className="text-xl font-bold text-[#649269 ]">BASIC</h3>
            <ul className="mt-4 text-gray-600 text-sm space-y-2">
              <li>✔ Custom URL</li>
              <li>✔ Acesso a estatísticas</li>
              <li>✔ Suporte via email</li>
            </ul>
            <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Escolher
            </button>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg border">
            <h3 className="text-xl font-bold text-[#649269 ]">PRO</h3>
            <ul className="mt-4 text-gray-600 text-sm space-y-2">
              <li>✔ Custom URL</li>
              <li>✔ Acesso a estatísticas</li>
              <li>✔ Suporte via email</li>
            </ul>
            <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Escolher
            </button>
          </div>
        </div>
      </section > */}

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
