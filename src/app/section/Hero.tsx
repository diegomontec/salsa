import Image from "next/image";

export default function Hero() {
  return (
    <div className="background w-full flex flex-col md:flex-row items-center justify-center">
      {/* Imagem de Fundo */}
      <div className="w-full h-screen  bg-hero bg-cover bg-center bg-no-repeat"></div>

      {/* Faixa Completa */}
      <div className="faixaCompleta w-full md:w-1/2 flex flex-col items-center bg-white sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8 text-verde mt-8 md:mt-0">
        <Image
          width={284}
          height={284}
          alt="Logo Salsa"
          src="/HeroLogoSalsa.png"
          className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
        />
        <div className="text-center">
          <b className="text-amarelo text-base sm:text-lg md:text-xl">
            INVISTA NA VIDA QUE VOCÊ LEVA.
          </b>
          <div className="text-xs sm:text-sm md:text-base">
            INVISTA NO QUE VOCÊ LEVA DA VIDA
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 sm:gap-4">
          <Image
            width={92}
            height={53}
            alt="Logo Markup"
            src="/LogoMarkup.png"
            className="w-[3rem] h-[1.5rem] sm:w-[4rem] sm:h-[2rem]"
          />
          <Image
            width={145}
            height={37}
            alt="Logo Record"
            src="/LogoRecord.png"
            className="w-[5rem] h-[1.25rem] sm:w-[6rem] sm:h-[1.5rem]"
          />
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
