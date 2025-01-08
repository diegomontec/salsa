import Carousel from "./Carousel";

export default function SecaoCinco() {
  const images = [
    "/CarouselUmUM.png",
    "/CarouselUmDOIS.png",
    "/CarouselUmTRES.png",
    "/CarouselUmQUATRO.png",
  ];

  return (
    <div>
      <div className="w-full relative bg-verde h-screen flex flex-col items-center justify-center py-[4rem] px-[4.375rem] box-border gap-[4rem] text-center text-[1.75rem] text-white font-work-sans">
        <b className="self-stretch relative uppercase">
          Sua rotina ganha novos motivos para ser ainda mais incrível
        </b>
        <Carousel images={images} />
      </div>
    </div>
  );
}
