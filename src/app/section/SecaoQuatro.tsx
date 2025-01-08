"use client"

import { useEffect } from "react";

export default function SecaoQuatro() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.bitrix24.com.br/b32099025/crm/form/loader_1.js";
    script.async = true;
    script.setAttribute("data-b24-form", "inline/1/cliewn");
    script.setAttribute("data-skip-moving", "true");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="w-full relative flex flex-col sm:flex-row items-start justify-start p-16 text-left text-[1.75rem] text-verde font-work-sans">
        <div className="texto">
          <b className=" uppercase flex items-center w-full">
            Cadastre-se e receba a apresentação completa do projeto
          </b>
        </div>
        <div className="formulario flex-1"></div>
      </div>
    </div>
  );
}
