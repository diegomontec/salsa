import Image from "next/image";
import Carousel from "./Carousel";

export default function SecaoSeis() {
  const images = [
    "/CarouselDoisUM.webp",
    "/CarouselDoisDOIS.webp",
    "/CarouselDoisTRES.webp",
    "/CarouselDoisQUATRO.webp",
  ];

  const infoItems = [
    {
      icon: "/BsRulers.png",
      text: "148,38m² - 177,47m² ou 254,72m²",
    },
    {
      icon: "/BsRulers.png",
      text: "Coberturas: 241,26m² - 289,20m² ou 418,08m²",
    },
    {
      icon: "/AiFillCar.png",
      text: "3 ou 4 vagas de garagem por apartamento",
    },
    {
      icon: "/AiFillCar.png",
      text: "6 vagas de garagem por cobertura",
    },
    {
      icon: "/AiFillCar.png",
      text: "17 vagas externas para visitantes",
    },
  ];

  return (
    <div>
      <div className="w-full relative flex flex-col md:flex-row items-start justify-start p-16 gap-16 text-left md:text-center text-2xl text-verde font-work-sans">
        {/* Seção de carrossel ajustada */}
        <div className="w-full h-auto relative items-center justify-center">
          <Carousel images={images} />
        </div>
        <div className=" flex flex-col items-start justify-center gap-[2rem]">
          <b className="w-full uppercase">
            Com Unidades na medida certa para a sua necessidade ou investimento
          </b>

          <div className="self-stretch flex flex-col items-start justify-center py-0 px-[0.312rem] gap-[1rem] text-[0.875rem]">
            {infoItems.map(({ icon, text }, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-start gap-[0.5rem]"
              >
                <Image
                  className="w-[2rem] h-[2rem]"
                  width={32}
                  height={32}
                  alt=""
                  src={icon}
                />
                <div className="relative">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
