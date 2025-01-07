import Maps from "./Maps";

export default function SecaoDois () {
  return (
    <div>
      <div className="relative bg-white w-full flex flex-col items-start justify-start py-[8rem] px-[4.375rem] box-border gap-[2rem] text-left text-[1.75rem] text-verde font-work-sans">
        <div className="self-stretch relative uppercase">
          <b>localizado no maior vetor de valorização imobiliária de Maceió</b>
        </div>
        <div className="w-full rounded-lg bg-white h-[42.125rem] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <Maps />
        </div>
      </div>
    </div>
  );
};
