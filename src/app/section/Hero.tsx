import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center md:flex-wrap">
      {/* Imagem de Fundo */}
      <div className="background w-full md:w-4/5 h-auto">
        <Image
          width={1920}
          height={1080}
          alt="Logo Salsa"
          src="/HeroImage.webp"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Faixa Completa */}
      <div className="faixaCompleta w-full md:w-1/5 flex flex-col items-center bg-white sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8 text-verde mt-8 md:mt-0">
        <Image
          width={284}
          height={284}
          alt="Logo Salsa"
          src="/HeroLogoSalsa.png"
          className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
        />
        <div className="blocoTexto text-center">
          <b className="text-amarelo text-base sm:text-lg md:text-xl">
            INVISTA NA VIDA QUE VOCÊ LEVA.
          </b>
          <div className="text-xs sm:text-sm md:text-base">
            INVISTA NO QUE VOCÊ LEVA DA VIDA
          </div>
        </div>
        <div className="pt-8">
          <div className="flex justify-center items-center gap-6 sm:gap-4">
            <Image
              className="object-cover w-24 h-auto"
              width={189} 
              height={109}
              alt="Logo Markup"
              src="/LogoMarkup.png"
            />
            <Image
              className="object-cover w-24 h-auto"
              width={239}
              height={61}
              alt="Logo Record"
              src="/LogoRecord.png"
            />
          </div>
        </div>
        <div className="mt-8 text-verde text-2xl sm:text-2xl md:text-2xl text-center">
          <b>Beira-Mar </b>
          <span>de</span>
          <b> Guaxuma</b>
        </div>
      </div>
    </div>
  );
}
