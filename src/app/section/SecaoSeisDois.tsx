import Image from 'next/image';

export default function SecaoSeisDois() {
  const infoItems = [
    [
      {
        icon: "/TiTick.png",
        text: "Fechadura eletrônica na porta de entrada dos apartamentos",
      },
      {
        icon: "/TiTick.png",
        text: "Pavimento clube com 8.000m²",
      },
      {
        icon: "/TiTick.png",
        text: "Redário",
      },
      {
        icon: "/TiTick.png",
        text: "Gerador full",
      },
    ],
    [
      {
        icon: "/TiTick.png",
        text: "Paisagismo com plantas nativas",
      },
      {
        icon: "/TiTick.png",
        text: "Iluminação em LED, reutilização de água e energia solar nas áreas comuns",
      },
      {
        icon: "/TiTick.png",
        text: "Áreas comuns entregues equipadas e decoradas",
      },
    ],
    [
      {
        icon: "/TiTick.png",
        text: "Bicicletário",
      },
      {
        icon: "/TiTick.png",
        text: "Pavimento do clube com mais de 30 itens de lazer",
      },
      {
        icon: "/TiTick.png",
        text: "Espaço delivery",
      },
    ],
  ];

  return (
    <div>
      <div className="w-full relative bg-white flex flex-col items-start justify-start pt-[4rem] pb-[8rem] px-[4.375rem] box-border text-left text-[1.75rem] text-verde font-work-sans">
        <div className="self-stretch flex flex-col items-start justify-center gap-[2rem]">
          <b className="self-stretch relative uppercase">
            DIFERENCIAS DO EMPREENDIMENTO
          </b>
          <div className="self-stretch flex flex-col md:flex-row items-start justify-start gap-[1rem] text-[0.875rem]">
            {infoItems.map((column, columnIndex) => (
              <div key={columnIndex} className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
                {column.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-row items-center justify-start gap-[0.5rem]">
                    <Image
                      className="w-[2rem] h-[2rem] overflow-hidden shrink-0"
                      width={32}
                      height={32}
                      alt=""
                      src={item.icon}
                    />
                    <div className="relative">{item.text}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



// import Image from 'next/image';

// export default function SecaoSeisDois() {
//   return (
//     <div>
//       <div className="w-full relative bg-white flex flex-col items-start justify-start pt-[4rem] pb-[8rem] px-[4.375rem] box-border text-left text-[1.75rem] text-verde font-work-sans">
//         <div className="self-stretch flex flex-col items-start justify-center gap-[2rem]">
//           <b className="self-stretch relative uppercase">
//             DIFERENCIAS DO EMPREENDIMENTO
//           </b>
//           <div className="self-stretch flex flex-row items-start justify-center gap-[1rem] text-[0.875rem]">
//             <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
//               <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//                 <Image
//                   className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
//                   width={32}
//                   height={32}
//                   alt=""
//                   src="/TiTick.png"
//                 />
//                 <div className="w-[23.938rem] relative inline-block shrink-0">
//                   Fechadura eletrônica na porta de entrada dos apartamentos
//                 </div>
//               </div>
//               <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//                 <Image
//                   className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
//                   width={32}
//                   height={32}
//                   alt=""
//                   src="/TiTick.png"
//                 />
//                 <div className="relative">Pavimento clube com 8.000m²</div>
//               </div>
//               <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//                 <Image
//                   className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
//                   width={32}
//                   height={32}
//                   alt=""
//                   src="/TiTick.png"
//                 />
//                 <div className="relative">Redário</div>
//               </div>
//               <div className="flex flex-row items-center justify-start gap-[0.5rem]">
//                 <Image
//                   className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
//                   width={32}
//                   height={32}
//                   alt=""
//                   src="/TiTick.png"
//                 />
//                 <div className="relative">Gerador full</div>
//               </div>
//             </div>
//             <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
//               <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//                 <Image
//                   className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
//                   width={32}
//                   height={32}
//                   alt=""
//                   src="/TiTick.png"
//                 />
//                 <div className="relative">Paisagismo com plantas nativas</div>
//               </div>
//               <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//                 <Image
//                   className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
//                   width={32}
//                   height={32}
//                   alt=""
//                   src="/TiTick.png"
//                 />
//                 <div className="relative">
//                   <p className="m-0">
//                     Iluminação em LED, reutilização de água e
//                   </p>
//                   <p className="m-0">energia solar nas áreas comuns</p>
//                 </div>
//               </div>
//               <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//                 <Image
//                   className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
//                   width={32}
//                   height={32}
//                   alt=""
//                   src="/TiTick.png"
//                 />
//                 <div className="relative">
//                   Áreas comuns entregues equipadas e decoradas
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
//               <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//                 <Image
//                   className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
//                   width={32}
//                   height={32}
//                   alt=""
//                   src="/TiTick.png"
//                 />
//                 <div className="relative">Bicicletário</div>
//               </div>
//               <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//                 <Image
//                   className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
//                   width={32}
//                   height={32}
//                   alt=""
//                   src="/TiTick.png"
//                 />
//                 <div className="relative">
//                   Pavimento do clube com mais de 30 itens de lazer
//                 </div>
//               </div>
//               <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//                 <Image
//                   className="w-[2rem] relative h-[2rem] overflow-hidden shrink-0"
//                   width={32}
//                   height={32}
//                   alt=""
//                   src="/TiTick.png"
//                 />
//                 <div className="relative">Espaço delivery</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
