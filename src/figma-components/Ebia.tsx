import React from 'react';

type EditorialNivelDeInsegurancaAlimentarProps = {
  className?: string;
  definicao?: string;
  nivel?: string;
};

function EditorialNivelDeInsegurancaAlimentar({ className, definicao = "Incerteza sobre o acesso e possível perda de qualidade.", nivel = "LEVE" }: EditorialNivelDeInsegurancaAlimentarProps) {
  return (
    <div className={className || "figma-17"} data-node-id="51:146" data-name="Editorial / Nível de insegurança alimentar">
      <p className="figma-0" data-node-id="51:147" style={{ fontVariationSettings: '"wdth" 100' }}>
        {nivel}
      </p>
      <p className="figma-1" data-node-id="51:148" style={{ fontVariationSettings: '"wdth" 100' }}>
        {definicao}
      </p>
    </div>
  );
}

type EditorialPainelEbiaInterativoProps = {
  className?: string;
  estado?: "Recolhido" | "Expandido • LEVE" | "Expandido • MODERADA" | "Expandido • GRAVE";
};

export default function EditorialPainelEbiaInterativo({ className, estado = "Recolhido" }: EditorialPainelEbiaInterativoProps) {
  const isExpandidoGrave = estado === "Expandido • GRAVE";
  const isExpandidoLeve = estado === "Expandido • LEVE";
  const isExpandidoModerada = estado === "Expandido • MODERADA";
  const isExpandidoModeradaOrExpandidoGrave = ["Expandido • MODERADA", "Expandido • GRAVE"].includes(estado);
  const isRecolhido = estado === "Recolhido";
  const isRecolhidoOrExpandidoModeradaOrExpandidoGrave = ["Recolhido", "Expandido • MODERADA", "Expandido • GRAVE"].includes(estado);
  return (
    <div className={className || "figma-18"} id={isExpandidoGrave ? "node-616_584" : isExpandidoModerada ? "node-616_569" : isExpandidoLeve ? "node-616_554" : "node-616_553"}>
      <p className="figma-2" id={isExpandidoGrave ? "node-616_585" : isExpandidoModerada ? "node-616_570" : isExpandidoLeve ? "node-616_555" : "node-616_540"}>
        NÍVEIS DA EBIA:
      </p>
      {isRecolhidoOrExpandidoModeradaOrExpandidoGrave && (
        <>
          <div className={` figma-19 ${isExpandidoModeradaOrExpandidoGrave ? "figma-20" : "figma-21"}`} id={isExpandidoGrave ? "node-616_586" : isExpandidoModerada ? "node-616_571" : "node-616_541"} data-name="Fundo • LEVE" />
          <EditorialNivelDeInsegurancaAlimentar className={` figma-22 ${isExpandidoModeradaOrExpandidoGrave ? "figma-23" : "figma-24"}`} definicao={isExpandidoModeradaOrExpandidoGrave ? "Incerteza e perda de qualidade." : undefined} />
        </>
      )}
      {["Recolhido", "Expandido • LEVE", "Expandido • GRAVE"].includes(estado) && <div className={` figma-19 ${isExpandidoGrave ? "figma-25" : isExpandidoLeve ? "figma-26" : "figma-27"}`} id={isExpandidoGrave ? "node-616_588" : isExpandidoLeve ? "node-616_558" : "node-616_545"} data-name="Fundo • MODERADA" />}
      {["Recolhido", "Expandido • GRAVE"].includes(estado) && <EditorialNivelDeInsegurancaAlimentar className={` figma-22 ${isExpandidoGrave ? "figma-28" : "figma-29"}`} definicao={isExpandidoGrave ? "Menos alimentos entre adultos." : "Redução da quantidade de comida entre adultos."} nivel="MODERADA" />}
      {["Recolhido", "Expandido • MODERADA"].includes(estado) && <div className={` figma-19 ${isExpandidoModerada ? "figma-30" : "figma-31"}`} id={isExpandidoModerada ? "node-616_575" : "node-616_549"} data-name="Fundo • GRAVE" />}
      {isRecolhido && (
        <>
          <EditorialNivelDeInsegurancaAlimentar className="figma-3" definicao="Privação alimentar intensa, com experiência de fome." nivel="GRAVE" />
          <button className="figma-4" data-node-id="618:574" data-name="Área de clique • LEVE" aria-label="Área de clique • LEVE" />
          <button className="figma-5" data-node-id="618:576" data-name="Área de clique • MODERADA" aria-label="Área de clique • MODERADA" />
          <button className="figma-6" data-node-id="618:578" data-name="Área de clique • GRAVE" aria-label="Área de clique • GRAVE" />
          <p className="figma-7" data-node-id="625:581" style={{ fontVariationSettings: '"wdth" 100' }}>
            Clique no card
          </p>
        </>
      )}
      {isExpandidoLeve && (
        <>
          <EditorialNivelDeInsegurancaAlimentar className="figma-8" definicao="Menos alimentos entre adultos." nivel="MODERADA" />
          <div className="figma-9" data-node-id="616:560" data-name="Fundo • GRAVE" />
        </>
      )}
      {["Expandido • LEVE", "Expandido • MODERADA"].includes(estado) && <EditorialNivelDeInsegurancaAlimentar className={` figma-22 ${isExpandidoModerada ? "figma-32" : "figma-33"}`} definicao="A fome pode alcançar crianças." nivel="GRAVE" />}
      {isExpandidoLeve && (
        <>
          <button className="figma-10" data-node-id="616:568" data-name="Fechar ao clicar fora • LEVE" aria-label="Fechar ao clicar fora • LEVE" />
          <div className="figma-11" data-node-id="616:556" data-name="Fundo • LEVE" />
          <EditorialNivelDeInsegurancaAlimentar className="figma-12" definicao="Há preocupação ou incerteza quanto ao acesso aos alimentos no futuro. A qualidade da alimentação pode ser comprometida por estratégias para preservar a quantidade de comida." />
          <p className="figma-7" data-node-id="625:582" style={{ fontVariationSettings: '"wdth" 100' }}>
            Clique no card
          </p>
        </>
      )}
      {isExpandidoModerada && (
        <>
          <button className="figma-10" data-node-id="616:583" data-name="Fechar ao clicar fora • MODERADA" aria-label="Fechar ao clicar fora • MODERADA" />
          <div className="figma-13" data-node-id="616:573" data-name="Fundo • MODERADA" />
          <EditorialNivelDeInsegurancaAlimentar className="figma-14" definicao="Há redução da quantidade de alimentos entre os adultos e/ou ruptura nos padrões habituais de alimentação por falta de comida entre os adultos." nivel="MODERADA" />
          <p className="figma-7" data-node-id="625:583" style={{ fontVariationSettings: '"wdth" 100' }}>
            Clique no card
          </p>
        </>
      )}
      {isExpandidoGrave && (
        <>
          <button className="figma-10" data-node-id="616:598" data-name="Fechar ao clicar fora • GRAVE" aria-label="Fechar ao clicar fora • GRAVE" />
          <div className="figma-15" data-node-id="616:590" data-name="Fundo • GRAVE" />
          <EditorialNivelDeInsegurancaAlimentar className="figma-16" definicao="A redução da quantidade de alimentos também alcança as crianças, com ruptura nos padrões de alimentação de todos os moradores. Nessa situação, a fome passa a ser vivida no domicílio." nivel="GRAVE" />
          <p className="figma-7" data-node-id="625:584" style={{ fontVariationSettings: '"wdth" 100' }}>
            Clique no card
          </p>
        </>
      )}
    </div>
  );
}
