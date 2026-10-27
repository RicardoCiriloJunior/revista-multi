import React from 'react';
import { useInteractionState, handleAnnualSelection } from '../interactive.jsx';
import { annualData } from '../interaction-data.mjs';

const img07InsegurancaAlimentarNoBrasil = "/assets/figma/196-739-e6ce3.svg";

export default function Component07InsegurancaAlimentarNoBrasil() {
  const [year, setYear] = useInteractionState("year", "2024");
  const data = annualData[year];
  const is2023 = year === "2023";
  return (
    <div className="figma-217" data-node-id="503:576" onClick={event => handleAnnualSelection(event, setYear)} data-name="07 • Insegurança alimentar no Brasil">
      <img alt="" className="figma-209" src={img07InsegurancaAlimentarNoBrasil} />
      <div className="figma-427" data-node-id="503:578" data-name="Rubrica">
        <p className="figma-428" data-node-id="503:579" style={{ fontVariationSettings: '"wdth" 100' }}>
          BRASIL / COMPARAÇÃO 2023–2024
        </p>
      </div>
      <p className="figma-362" data-node-id="503:580">
        Insegurança alimentar no Brasil
      </p>
      <p className="figma-363" data-node-id="503:581" style={{ fontVariationSettings: '"wdth" 100' }}>
        A melhora nacional convive com a permanência de dificuldades de acesso à comida.
      </p>
      <p className="figma-429" data-node-id="503:582" style={{ fontVariationSettings: '"wdth" 100' }}>{data.explanation}</p>
      <p className="figma-430" data-node-id="503:583" style={{ fontVariationSettings: '"wdth" 100' }}>
        A soma dos valores arredondados pode diferir em 0,1 ponto percentual do total divulgado. A Escala Brasileira de Insegurança Alimentar, utilizada pelo IBGE, investiga experiências do domicílio nos três meses anteriores à entrevista. Ao ler uma porcentagem, três perguntas ajudam: qual é o período, qual é o território e qual é a unidade observada? Nesta página, a unidade é o domicílio brasileiro. A redução média é relevante, mas não significa que todos os estados e grupos tenham vivido a mesma trajetória.
      </p>
      <p className="figma-431" data-node-id="503:584" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fontes do gráfico: IBGE, PNAD Contínua: Segurança alimentar 2023 e 2024. Unidade: domicílios. Publicações: 2024 e 2025.
      </p>
      <div className="figma-432" data-node-id="503:585" style={{ "--gráfico-•-barra-leve": data.widths[0] + "px", "--gráfico-•-barra-moderada": data.widths[1] + "px", "--gráfico-•-barra-grave": data.widths[2] + "px" }} data-name="Gráfico interativo • Brasil 2023 e 2024">
        <p className="figma-433" data-node-id="I503:585;49:41" style={{ fontVariationSettings: '"wdth" 100' }}>
          Domicílios com insegurança alimentar • Brasil (%)
        </p>
        <div className={`${is2023 ? "figma-451" : "figma-452"}`} data-node-id="I503:585;49:42" role="button" tabIndex="0" data-name="Selecionar 2023">
          <p className={`${is2023 ? "figma-453" : "figma-454"}`} data-node-id="I503:585;49:43" style={{ fontVariationSettings: '"wdth" 100' }}>
            2023
          </p>
        </div>
        <div className={`${is2023 ? "figma-455" : "figma-456"}`} data-node-id="I503:585;49:44" data-name="Selecionar 2024" role="button" tabIndex="0">
          <p className={`${is2023 ? "figma-454" : "figma-453"}`} data-node-id="I503:585;49:45" style={{ fontVariationSettings: '"wdth" 100' }}>
            2024
          </p>
        </div>
        <p className="figma-434" data-node-id="I503:585;49:46" style={{ fontVariationSettings: '"wdth" 100' }}>
          Leve
        </p>
        <div className="figma-435" data-node-id="I503:585;49:47" data-name="Escala 0" />
        <div className="figma-436" data-node-id="I503:585;49:48" data-name="Barra 0" />
        <p className="figma-437" data-node-id="I503:585;49:49" style={{ fontVariationSettings: '"wdth" 100' }}>{data.levels[0]}</p>
        <p className="figma-438" data-node-id="I503:585;49:50" style={{ fontVariationSettings: '"wdth" 100' }}>
          Moderada
        </p>
        <div className="figma-439" data-node-id="I503:585;49:51" data-name="Escala 1" />
        <div className="figma-440" data-node-id="I503:585;49:52" data-name="Barra 1" />
        <p className="figma-441" data-node-id="I503:585;49:53" style={{ fontVariationSettings: '"wdth" 100' }}>{data.levels[1]}</p>
        <p className="figma-442" data-node-id="I503:585;49:54" style={{ fontVariationSettings: '"wdth" 100' }}>
          Grave
        </p>
        <div className="figma-443" data-node-id="I503:585;49:55" data-name="Escala 2" />
        <div className="figma-444" data-node-id="I503:585;49:56" data-name="Barra 2" />
        <p className="figma-445" data-node-id="I503:585;49:57" style={{ fontVariationSettings: '"wdth" 100' }}>{data.levels[2]}</p>
        <p className="figma-446" data-node-id="I503:585;49:59">{data.total}</p>
        <p className="figma-447" data-node-id="I503:585;49:60" style={{ fontVariationSettings: '"wdth" 100' }}>{data.description}</p>
        <p className="figma-448" data-node-id="I503:585;51:138" style={{ fontVariationSettings: '"wdth" 100' }}>
          0%
        </p>
        <p className="figma-449" data-node-id="I503:585;51:139" style={{ fontVariationSettings: '"wdth" 100' }}>
          10%
        </p>
        <p className="figma-450" data-node-id="I503:585;51:140" style={{ fontVariationSettings: '"wdth" 100' }}>
          20%
        </p>
      </div>
    </div>
  );
}
