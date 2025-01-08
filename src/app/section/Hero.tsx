import Image from "next/image";

export default function Hero() {
  return (
    <div className="background w-full min-h-screen relative flex justify-end items-start bg-hero bg-cover bg-no-repeat bg-center">
      
      <div className="faixaCompleta flex flex-col items-center mr-16 rounded-lg">
        
        <div className="Faixa relative bg-white rounded-lg p-8 gap-8 text-verde flex flex-col items-center">
          <Image
            width={284}
            height={284}
            alt="Logo Salsa"
            src="/HeroLogoSalsa.png"
            className="w-[200px] h-[200px]"
          />
          <div className="text-center">
            <b className="text-amarelo text-lg">
              INVISTA NA VIDA QUE VOCÊ LEVA.
            </b>
            <div className="text-sm">
              INVISTA NO QUE VOCÊ LEVA DA VIDA
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Image
              width={92}
              height={53}
              alt="Logo Markup"
              src="/LogoMarkup.png"
              className="w-[4rem] h-[2rem]"
            />
            <Image
              width={145}
              height={37}
              alt="Logo Record"
              src="/LogoRecord.png"
              className="w-[6rem] h-[1.5rem]"
            />
          </div>
        </div>
        
        <div className="mt-4 text-white text-4xl">
          <b>Beira-Mar </b>
          <span>de</span>
          <b> Guaxuma</b>
        </div>
      </div>
    </div>
  );
}
