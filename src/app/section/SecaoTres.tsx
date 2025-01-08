import Image from 'next/image';

export default function SecaoTres() {
  return (
    <div>
      <div className="w-full relative flex flex-col items-start justify-start p-16 gap-[4rem] text-left text-[1.75rem] text-verde font-work-sans">
        <b className=" uppercase">
          UM MERGULHO À BEIRA-MAR DE GUAXUMA
        </b>
        <div className="w-full">
          <Image
            className="rounded-lg object-cover w-full h-auto"
            width={1301}
            height={687}
            alt="Piscina"
            src="/Piscina.webp"
          />
        </div>
      </div>
    </div>
  );
}
