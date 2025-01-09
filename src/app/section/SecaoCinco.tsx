import Carousel from "./Carousel";

export default function SecaoCinco() {
  const images = [
    "/CarouselUmUM.webp",
    "/CarouselUmDOIS.webp",
    "/CarouselUmTRES.webp",
    "/CarouselUmQUATRO.webp",
  ];

  return (
    <div className="w-full relative bg-verde flex flex-col items-center justify-center p-16 gap-16 text-center">
      <b className="relative uppercase text-lg md:text-2xl text-white font-work-sans">
        Sua rotina ganha novos motivos para ser ainda mais incrível
      </b>
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <Carousel images={images} />
      </div>
    </div>
  );
}
