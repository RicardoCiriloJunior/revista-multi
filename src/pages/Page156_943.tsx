import React from 'react';

const img06HistoriaDaFomeEDireitoAAlimentacao = "/assets/figma/196-739-e6ce3.svg";
const imgVector = "/assets/figma/156-943-450b7.svg";

type EditorialMiniGlossarioProps = {
  className?: string;
  definicoes?: string;
};

function EditorialMiniGlossario({ className, definicoes = "Sigla • significado." }: EditorialMiniGlossarioProps) {
  return (
    <div className={className || "figma-426"} data-node-id="50:96" data-name="Editorial / Mini glossário">
      <p className="figma-396" data-node-id="50:97" style={{ fontVariationSettings: '"wdth" 100' }}>
        GLOSSÁRIO
      </p>
      <p className="figma-397" data-node-id="50:98" style={{ fontVariationSettings: '"wdth" 100' }}>
        {definicoes}
      </p>
    </div>
  );
}

export default function Component06HistoriaDaFomeEDireitoAAlimentacao() {
  return (
    <div className="figma-217" data-node-id="156:943" data-name="06 • História da fome e direito à alimentação">
      <img alt="" className="figma-209" src={img06HistoriaDaFomeEDireitoAAlimentacao} />
      <div className="figma-405" data-node-id="156:945" data-name="Rubrica">
        <p className="figma-406" data-node-id="156:946" style={{ fontVariationSettings: '"wdth" 100' }}>
          HISTÓRIA
        </p>
      </div>
      <div className="figma-407" data-node-id="156:947" data-name="Vector">
        <img alt="" className="figma-209" src={imgVector} />
      </div>
      <div className="figma-408" data-node-id="156:948" data-name="Marco 1798">
        <p className="figma-409" data-node-id="156:949">
          1798
        </p>
      </div>
      <div className="figma-410" data-node-id="156:950" data-name="Vector">
        <img alt="" className="figma-209" src={imgVector} />
      </div>
      <div className="figma-411" data-node-id="156:951" data-name="Marco 1946">
        <p className="figma-412" data-node-id="156:952">
          1946
        </p>
      </div>
      <div className="figma-413" data-node-id="156:953" data-name="Vector">
        <img alt="" className="figma-209" src={imgVector} />
      </div>
      <div className="figma-414" data-node-id="156:954" data-name="Marco 1948">
        <p className="figma-415" data-node-id="156:955">
          1948
        </p>
      </div>
      <div className="figma-416" data-node-id="156:956" data-name="Vector">
        <img alt="" className="figma-209" src={imgVector} />
      </div>
      <div className="figma-417" data-node-id="156:957" data-name="Marco 2006">
        <p className="figma-418" data-node-id="156:958">
          2006
        </p>
      </div>
      <p className="figma-362" data-node-id="156:959">
        História da fome e direito à alimentação
      </p>
      <p className="figma-363" data-node-id="156:960" style={{ fontVariationSettings: '"wdth" 100' }}>
        A explicação da fome mudou com o tempo. O reconhecimento da alimentação como direito ampliou o debate.
      </p>
      <p className="figma-419" data-node-id="156:961" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="figma-392">A</span>
        <span className="figma-383">{` fome está presente na história humana há milhares de anos. Durante muito tempo, foi associada principalmente à escassez de alimentos causada por más colheitas, secas, guerras, pragas e dificuldades de armazenamento e distribuição. Grandes episódios ocorreram em diferentes sociedades, mas os registros disponíveis são muito mais completos para os períodos recentes do que para a Antiguidade e a Idade Média (Vasconcelos, 2008). Thomas Robert Malthus publicou, em 1798, An`}</span>
      </p>
      <p className="figma-420" data-node-id="156:962" style={{ fontVariationSettings: '"wdth" 100' }}>
        Essay on the Principle of Population. Nos capítulos 1 e 2, formulou a hipótese de crescimento geométrico da população, quando não contida, e de crescimento aritmético dos meios de subsistência. Seu argumento relacionava essa diferença à pressão sobre os alimentos e às condições de vida. Essa formulação pertence ao debate histórico sobre população e escassez.
      </p>
      <p className="figma-421" data-node-id="156:963" style={{ fontVariationSettings: '"wdth" 100' }}>
        Malthus e o debate sobre população e alimentos.
      </p>
      <p className="figma-422" data-node-id="156:964" style={{ fontVariationSettings: '"wdth" 100' }}>
        Josué de Castro publica Geografia da Fome.
      </p>
      <p className="figma-423" data-node-id="156:965" style={{ fontVariationSettings: '"wdth" 100' }}>
        Alimentação na Declaração Universal dos Direitos Humanos.
      </p>
      <p className="figma-424" data-node-id="156:966" style={{ fontVariationSettings: '"wdth" 100' }}>
        LOSAN e criação do SISAN no Brasil.
      </p>
      <p className="figma-425" data-node-id="156:967" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fontes: Malthus (1798); ONU, Declaração Universal dos Direitos Humanos (1948), art. 25; Lei 11.346/2006 (LOSAN). Referências completas na p. 22.
      </p>
      <EditorialMiniGlossario className="figma-395" definicoes="ONU • Organização das Nações Unidas. LOSAN • Lei Orgânica de Segurança Alimentar e Nutricional. SISAN • Sistema Nacional de Segurança Alimentar e Nutricional." />
    </div>
  );
}
