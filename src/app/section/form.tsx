"use client";

import { useEffect } from "react";

const Formulario = () => {
  useEffect(() => {
    // Criar o script dinamicamente
    const script = document.createElement("script");
    script.src = "https://cdn.bitrix24.com.br/b32099025/crm/form/loader_1.js";
    script.async = true;
    script.setAttribute("data-b24-form", "inline/1/cliewn");
    script.setAttribute("data-skip-moving", "true");

    // Seleciona o elemento onde o formulário será inserido
    const formularioDiv = document.getElementById("formulario");

    if (formularioDiv) {
      formularioDiv.appendChild(script); // Adiciona o script dentro da div específica
    }

    return () => {
      // Limpeza do script quando o componente for desmontado
      if (formularioDiv) {
        formularioDiv.innerHTML = ""; // Remove o conteúdo inserido pelo script
      }
    };
  }, []);

  return (
    <div id="formulario" className="w-full">
      {/* O formulário será carregado aqui dinamicamente */}
    </div>
  );
};

export default Formulario;
