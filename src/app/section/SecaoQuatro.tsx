"use client";

import Formulario from "./form"; // Importe o componente Formulario

export default function SecaoQuatro() {
  return (
    <div>
      <div className="w-full relative flex flex-col sm:flex-row items-center justify-between p-16 text-center md:text-center text-2xl text-verde font-work-sans gap-8">
        {/* Seção Texto */}
        <div className="texto w-full sm:w-1/2 mb-8 sm:mb-0">
          <b className="uppercase flex items-center w-full">
            Cadastre-se e receba a apresentação completa do projeto
          </b>
        </div>

        {/* Seção do Formulário */}
        <div className="formulario flex w-full items-center justify-center sm:w-1/2">
          <Formulario /> 
        </div>
      </div>
    </div>
  );
}
