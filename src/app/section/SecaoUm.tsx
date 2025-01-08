"use client"

import Image from "next/image";

export default function SecaoUm() {
  const scrollToFormulario = () => {
    const formulario = document.getElementById("formulario");
    if (formulario) {
      formulario.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="container w-full relative flex md:flex-row flex-col items-center py-16 md:py-[4rem] px-20 md:px-10">
      <div className="Imagem w-full relative flex-1 flex flex-col md:flex-row items-center gap-[4rem]">
        <Image
          className="relative rounded-lg object-cover"
          width={720}
          height={380}
          alt=""
          src="/BlocoImagem.webp"
        />
        <div className="Textos w-full md:w-auto self-stretch flex-1 flex flex-col items-start justify-center text-verde gap-[2rem]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[2rem] text-verde  text-2xl">
            <b className="w-full relative uppercase flex items-center">
              <span className="w-full ">
                <span>Exclusividade e conforto para quem deseja uma </span>
                <span className="text-amarelo">experiência</span>
                <span> única!</span>
              </span>
            </b>
            <div className="w-full relative text-[0.875rem] flex items-center">
              <span className="w-full">
                <p className="m-0">A 5 minutos do Parque Shopping em uma</p>
                <p className="m-0">
                  <span>{`das áreas de `}</span>
                  <span className="text-amarelo">maior valorização</span>
                  <span className="text-verde">{` imobiliária de Maceió `}</span>
                </p>
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              <Image
                className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
                width={32}
                height={32}
                alt=""
                src="/TiTick.png"
              />
              <div className="relative">Guaxuma</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.5rem] text-center">
              <Image
                className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
                width={32}
                height={32}
                alt=""
                src="/TiTick.png"
              />
              <div className="relative">148m² a 254m²</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
              <Image
                className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
                width={32}
                height={32}
                alt=""
                src="/TiTick.png"
              />
              <div className="flex-1 relative">
                Pavimento do clube com mais de 30 itens de lazer
              </div>
            </div>
          </div>
          <button
            className="relative w-full px-6 py-2 bg-verde text-white hover:text-verde rounded-lg hover:bg-amarelo"
            onClick={scrollToFormulario}
          >
            Quero saber mais
          </button>
        </div>
      </div>
    </div>
  );
}
