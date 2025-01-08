import Maps from "./Maps";

export default function SecaoDois () {
  return (
    <div>
      <div className="relative bg-white w-full flex flex-col items-start justify-start p-16 gap-16 text-left text-[1.75rem] text-verde font-work-sans">
        <div className="self-stretch relative uppercase">
          <b>localizado no maior vetor de valorização imobiliária de Maceió</b>
        </div>
        <div className="w-full rounded-lg bg-white h-auto overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <Maps />
        </div>
      </div>
    </div>
  );
};
