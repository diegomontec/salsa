import YouTube from "./Youtube";

export default function SecaoDois () {
  return (
    <div>
      <div className="w-full relative bg-verde flex flex-col items-center justify-center p-16 gap-16 text-center md:text-center text-2xl text-white font-work-sans">
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
