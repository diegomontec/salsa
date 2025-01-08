import Carousel from "./Carousel";

export default function SecaoCinco() {
  const images = [
    "/CarouselUmUM.webp",
    "/CarouselUmDOIS.webp",
    "/CarouselUmTRES.webp",
    "/CarouselUmQUATRO.webp",
  ];

  return (
    <div className="w-full bg-verde flex flex-col items-center justify-center p-8 gap-8 md:gap-2 sm:gap-2 text-center">
      {/* Título Responsivo */}
      <b className="relative uppercase text-lg md:text-2xl text-white font-work-sans">
        Sua rotina ganha novos motivos para ser ainda mais incrível
      </b>

      {/* Carrossel */}
      <div className="w-full h-full overflow-hidden">
        <Carousel images={images} />
      </div>
    </div>
  );
}
