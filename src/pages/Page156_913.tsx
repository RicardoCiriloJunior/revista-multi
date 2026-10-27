import React from 'react';
import { EbiaPanel } from '../interactive.jsx';

const img04OQueEInsegurancaAlimentar = "/assets/figma/196-739-e6ce3.svg";

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
  estado?: "Recolhido";
};


export default function Component04OQueEInsegurancaAlimentar() {
  return (
    <div className="figma-217" data-node-id="503:520" data-name="04 • O que é insegurança alimentar?">
      <img alt="" className="figma-209" src={img04OQueEInsegurancaAlimentar} />
      <div className="figma-389" data-node-id="503:522" data-name="Rubrica">
        <p className="figma-390" data-node-id="503:523" style={{ fontVariationSettings: '"wdth" 100' }}>
          CONCEITOS
        </p>
      </div>
      <p className="figma-391" data-node-id="503:531" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="figma-392">A</span>
        <span className="figma-383">{` fome pode ser compreendida por seus aspectos biológico e social. Ela ocorre quando uma pessoa não consegue consumir alimentos em quantidade suficiente para atender às necessidades do organismo. Não existe uma quantidade universal de calorias que determine se uma pessoa está passando fome. As necessidades energéticas variam conforme idade, sexo, tamanho corporal e nível de atividade física. Por isso, a FAO utiliza uma metodologia específica para estimar as necessidades da população analisada (FAO, s.d.-a). A desnutrição não deve ser confundida com fome ou subalimentação. Enquanto a subalimentação se refere principalmente à quantidade insuficiente de energia alimentar, a desnutrição é mais ampla e pode envolver deficiências de nutrientes, crescimento`}</span>
      </p>
      <p className="figma-393" data-node-id="503:532" style={{ fontVariationSettings: '"wdth" 100' }}>
        inadequado e emagrecimento extremo. A insegurança alimentar tem um significado mais amplo do que a fome. Uma pessoa pode consumir alimentos todos os dias e ainda não conseguir manter uma alimentação adequada, variada e nutritiva. A falta de garantia de acesso regular à alimentação pode se manifestar antes da privação mais grave. Isso acontece quando há preocupação de que a comida não seja suficiente até o fim do mês, quando a família diminui a variedade da alimentação ou reduz a quantidade de alimentos por falta de recursos. O acesso à alimentação depende de renda, emprego, preços dos alimentos e possibilidade de chegar aos locais onde eles são vendidos. Assim, a insegurança alimentar constitui também um problema social, relacionado às condições de vida e à distribuição de recursos dentro da sociedade.
      </p>
      <p className="figma-362" data-node-id="503:533">
        O que é insegurança alimentar?
      </p>
      <p className="figma-363" data-node-id="503:534" style={{ fontVariationSettings: '"wdth" 100' }}>
        Insegurança alimentar é mais ampla que a privação extrema. Entender as diferenças evita leituras apressadas.
      </p>
      <p className="figma-394" data-node-id="503:535" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fontes: FAO, conceitos de fome e insegurança alimentar; IBGE, PNAD Contínua 2024, p. 1.
      </p>
      <div className="figma-395" data-node-id="503:536" data-name="Mini glossário • nesta página">
        <p className="figma-396" data-node-id="I503:536;50:97" style={{ fontVariationSettings: '"wdth" 100' }}>
          GLOSSÁRIO
        </p>
        <p className="figma-397" data-node-id="I503:536;50:98" style={{ fontVariationSettings: '"wdth" 100' }}>
          FAO • Organização das Nações Unidas para a Alimentação e a Agricultura. EBIA • Escala Brasileira de Insegurança Alimentar. IBGE • Instituto Brasileiro de Geografia e Estatística. PNAD • Pesquisa Nacional por Amostra de Domicílios.
        </p>
      </div>
      <EbiaPanel className="figma-398" />
    </div>
  );
}
