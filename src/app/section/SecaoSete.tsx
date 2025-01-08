import Image from "next/image";

export default function SecaoSete() {
  return (
    <div className="relative w-full py-16 px-20 bg-verde text-white font-work-sans box-border">
      {/* Seção principal */}
      <div className="flex flex-col items-center gap-[4rem]">
        {/* Container com logo e texto */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full h-full">
          <Image
            className="object-cover"
            width={282}
            height={282}
            alt="Logo Salsa"
            src="/LogoSalsaBranco.png"
          />
          <div className="text-center">
            A condição que leva seu investimento para a melhor direção, enquanto o retorno volta para você!
          </div>
        </div>

        {/* Seção de parcerias */}
        <div className="w-full rounded-lg bg-white flex flex-col md:flex-row justify-between p-16 gap-16 text-verde items-center">
          <b className="w-full text-center text-xl">UMA PARCERIA DE SUCESSO</b>
          <div className="flex flex-col justify-center  md:flex-row gap-8 md:gap-16 w-full">
            {/* Parceria 1 */}
            <div className="flex flex-col items-center gap-8 text-cinza">
              <div className="font-medium text-center">Realização e incorporação</div>
              <Image
                className="object-cover w-32 h-auto"
                width={189} 
                height={109}
                alt="Logo Markup"
                src="/LogoMarkup.png"
              />
            </div>
            {/* Parceria 2 */}
            <div className="flex flex-col items-center gap-8 text-cinza">
              <div className="font-medium">Construção</div>
              <Image
                className="object-cover w-32 h-auto"
                width={239}
                height={61}
                alt="Logo Record"
                src="/LogoRecord.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
