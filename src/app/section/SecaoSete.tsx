import Image from "next/image";

export default function SecaoSete() {
  return (
    <div>
      <div className="relative w-full flex flex-col items-center justify-start py-[8rem] px-[4.375rem] bg-verde box-border gap-[4rem] text-left text-[1.75rem] text-white font-work-sans">
        <div className="flex flex-col items-start justify-start">
          <div className="w-[90rem] h-[17.625rem] flex flex-row items-center justify-center py-[0rem] px-[4.375rem] box-border gap-[4rem]">
            <Image
              className="w-[17.625rem] relative h-[17.625rem] object-cover"
              width={282}
              height={282}
              alt=""
              src="/LogoSalsaBranco.png"
            />
            <div className="w-[50.313rem] relative flex justify-center items-center shrink-0">
              A condição que leva seu investimento para a melhor direção,
              enquanto o retorno volta para você!
            </div>
          </div>
        </div>
        <div className="w-[81.25rem] relative rounded-lg bg-white h-[19.625rem] text-center text-[1.125rem] text-verde">
          <div className="absolute top-[0rem] left-[-4.312rem] w-[90rem] h-[19.625rem] flex flex-row items-center justify-between py-[0rem] px-[16.25rem] box-border">
            <b className="relative">UMA PARCERIA DE SUCESSO :</b>
            <div className="flex flex-row items-start justify-center gap-[4rem] text-cinza">
              <div className="flex flex-col items-center justify-center gap-[2rem]">
                <div className="relative font-medium">
                  Realização e incorporação
                </div>
                <Image
                  className="w-auto relative h-auto object-cover"
                  width={189}
                  height={109}
                  alt=""
                  src="/LogoMarkup.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-[2rem] text-left">
                <div className="relative font-medium">Construção</div>
                <div className="flex flex-row items-center justify-center">
                  <Image
                    className="w-auto relative h-auto object-cover"
                    width={239}
                    height={61}
                    alt=""
                    src="/LogoRecord.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
