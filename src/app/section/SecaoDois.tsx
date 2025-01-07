import YouTube from "./Youtube";

export default function SecaoDois () {
  return (
    <div>
      <div className="w-full relative bg-verde flex flex-col items-center justify-center py-[8rem] px-[4.375rem] box-border gap-[4rem] text-left text-[1.75rem] text-white font-work-sans">
        <div className="self-stretch flex flex-col items-start justify-center">
          <b className="self-stretch relative uppercase">
            o jeito salsa de fazer diferente!
          </b>
          <div className="self-stretch relative">
            Uma nova experiência com tudo ao seu redor.
          </div>
        </div>
        <YouTube />
      </div>
    </div>
  );
};
