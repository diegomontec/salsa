import Image from "next/image";

export default function SecaoUm() {
  return (
    <div className="w-full relative flex flex-col items-center justify-center py-[8rem] px-[4.375rem] box-border text-left text-[0.875rem] text-verde font-work-sans">
      <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[4rem]">
        <Image
          className="relative rounded-lg object-cover"
          width={1080}
          height={380}
          alt=""
          src="/BlocoImagem.png"
        />
        <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[2rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] text-[1.75rem]">
            <b className="w-[41.25rem] relative uppercase flex items-center">
              <span className="w-full">
                <span>Exclusividade e conforto para quem deseja uma </span>
                <span className="text-amarelo">experiência</span>
                <span> única!</span>
              </span>
            </b>
            <div className="w-[33.875rem] relative text-[0.875rem] flex items-center">
              <span className="w-full">
                <p className="m-0">A 5 minutos do Parque Shopping em uma</p>
                <p className="m-0">
                  <span>{`das áreas de `}</span>
                  <span className="text-amarelo">maior valorização</span>
                  <span className="text-verde">{` imobiliária de Maceió `}</span>
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
            <button className="relative leading-[1.25rem] px-6 py-2 bg-verde text-white hover:text-verde rounded-lg hover:bg-amarelo">
              Quero saber mais
            </button>
        </div>
      </div>
    </div>
  );
}
