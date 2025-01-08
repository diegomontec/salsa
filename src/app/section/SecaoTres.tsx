import Image from 'next/image';

export default function SecaoTres() {
  return (
    <div>
      <div className="w-full relative flex flex-col items-start justify-start py-[8rem] px-[4.375rem] box-border gap-[4rem] text-left text-[1.75rem] text-verde font-work-sans">
        <b className="w-full relative uppercase inline-block">
          UM MERGULHO À BEIRA-MAR DE GUAXUMA
        </b>
        <Image
          className="w-full relative rounded-lg h-[42.938rem] object-cover"
          width={1301}
          height={687}
          alt=""
          src="/Piscina.png"
        />
      </div>
    </div>
  );
}
