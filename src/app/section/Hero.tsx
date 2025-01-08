import Image from "next/image";

export default function Hero() {
  return (
    <div className="background w-full relative h-[100vh] flex justify-end items-start bg-hero bg-cover bg-no-repeat bg-center ">
      
      <div className="faixaCompleta flex flex-col items-center mr-12 justify-center rounded-lg">
        
        <div className="Faixa relative bg-white rounded-lg p-8 gap-8 text-verde flex flex-col items-center">
          <Image
            width={284}
            height={284}
            alt="Logo Salsa"
            src="/HeroLogoSalsa.png"
            className="w-[200px] h-[200px]"
          />
          <div className="text-center">
            <b className="text-amarelo text-lg">
              INVISTA NA VIDA QUE VOCÊ LEVA.
            </b>
            <div className="text-sm">
              INVISTA NO QUE VOCÊ LEVA DA VIDA
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Image
              width={92}
              height={53}
              alt="Logo Markup"
              src="/LogoMarkup.png"
              className="w-[4rem] h-[2rem]"
            />
            <Image
              width={145}
              height={37}
              alt="Logo Record"
              src="/LogoRecord.png"
              className="w-[6rem] h-[1.5rem]"
            />
          </div>
        </div>
        
        <div className="mt-4 text-white text-lg">
          <b>Beira-Mar </b>
          <span>de</span>
          <b> Guaxuma</b>
        </div>
      </div>
    </div>
  );
}

// export default function Hero() {
//   return (
//     <div className="w-full relative h-[100vh] bg-hero bg-cover bg-no-repeat bg-[top] text-center text-white font-work-sans">
//       <div className="absolute top-[0rem] left-[60.000rem] w-[26.188rem] text-4xl h-[34.313rem]">
//         <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-white w-[26.188rem] h-[29.938rem] text-[1.125rem] text-verde">
//           <Image
//             className="absolute top-[0rem] left-[4.25rem] w-[17.75rem] h-[17.75rem] object-cover"
//             width={284}
//             height={284}
//             alt=""
//             src="/HeroLogoSalsa.png"
//           />
//         </div>
//         <div className="absolute top-[19.063rem] left-[2.938rem] w-[20.313rem] h-[2.625rem]">
//           <div className="absolute top-[1.313rem] left-[0rem] flex items-center justify-center w-[20.313rem]">
//             INVISTA NO QUE VOCÊ LEVA DA VIDA
//           </div>
//           <b className="absolute top-[0rem] left-[0rem] flex text-amarelo items-center justify-center w-[20.313rem]">
//             INVISTA NA VIDA QUE VOCÊ LEVA.
//           </b>
//         </div>
//         <div className="absolute top-[24.313rem] left-[2.938rem] w-[20.313rem] h-[3.313rem]">
//           <Image
//             className="absolute top-[0rem] left-[1.75rem] w-[5.75rem] h-[3.313rem] object-cover"
//             width={92}
//             height={53}
//             alt=""
//             src="/LogoMarkup.png"
//           />
//           <Image
//             className="absolute top-[0.5rem] left-[9.5rem] w-[9.063rem] h-[2.313rem] object-cover"
//             width={145}
//             height={37}
//             alt=""
//             src="/LogoRecord.png"
//           />
//         </div>
//         <div className="absolute top-[31.313rem] left-[1.000rem]">
//           <b>Beira-Mar </b>
//           <span>de</span>
//           <b> Guaxuma</b>
//         </div>
//       </div>
//     </div>
//   );
// }
