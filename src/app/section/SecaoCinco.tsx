import Carousel from "./Carousel";

export default function SecaoCinco() {
  const images = [
    "/CarouselUmUM.webp",
    "/CarouselUmDOIS.webp",
    "/CarouselUmTRES.webp",
    "/CarouselUmQUATRO.webp",
  ];

  return (
    <div>
      <div className="w-full relative bg-verde h-full flex flex-col items-center justify-center p-16 box-border gap-16 text-center text-[1.75rem] text-white font-work-sans">
        <b className="relative uppercase">
          Sua rotina ganha novos motivos para ser ainda mais incrível
        </b>
        <div className="w-full h-full flex justify-center items-center">
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
}
