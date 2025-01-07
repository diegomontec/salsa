import Image from "next/image";
import Carousel from "./Carousel";

export default function SecaoSeis() {
    const images = [
      "/CarouselDoisUM.png",
      "/CarouselDoisDOIS.png",
      "/CarouselDoisTRES.png",
      "/CarouselDoisQUATRO.png",
    ];

  return (
    <div>
      <div className="w-full relative flex flex-row items-start justify-start pt-[8rem] pb-[4rem] px-[4.375rem] box-border gap-[4rem] text-left text-[1.75rem] text-verde font-work-sans">
        <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[2rem]">
          <b className="self-stretch relative uppercase pr-8">
            Com Unidades na medida certa para a sua necessidade ou investimento
          </b>
          <div className="self-stretch flex flex-col items-start justify-center py-[0rem] px-[0.312rem] gap-[1rem] text-[0.875rem]">
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              <Image
                className="w-[2rem] relative h-[2rem]"
                width={32}
                height={32}
                alt=""
                src="/BsRulers.png"
              />
              <div className="relative">148,38m² - 177,47m² ou 254,72m²</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              <Image
                className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
                width={32}
                height={32}
                alt=""
                src="/BsRulers.png"
              />
              <div className="relative">
                Coberturas: 241,26m² - 289,20m² ou 418,08m²
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              <Image
                className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
                width={32}
                height={32}
                alt=""
                src="/AiFillCar.png"
              />
              <div className="relative">
                3 ou 4 vagas de garagem por apartamento
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              <Image
                className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
                width={32}
                height={32}
                alt=""
                src="/AiFillCar.png"
              />
              <div className="relative">6 vagas de garagem por cobertura</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.5rem]">
              <Image
                className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
                width={32}
                height={32}
                alt=""
                src="/AiFillCar.png"
              />
              <div className="relative">17 vagas externas para visitantes</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-start h-[600px]">
          <Carousel images={images} />
        </div>
      </div>
      <div className="w-full relative border-gray-200 border-[0.1rem] border-solid" />
    </div>
  );
}
// className="w-auto h-auto relative rounded-lg object-cover"
//           width={1080}
//           height={380}