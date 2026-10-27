import React from 'react';

const img14EconomiaEDesigualdadeNoNorte = "/assets/figma/196-739-e6ce3.svg";

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

export default function Component14EconomiaEDesigualdadeNoNorte() {
  return (
    <div className="figma-217" data-node-id="156:1021" data-name="14 • Economia e desigualdade no Norte">
      <img alt="" className="figma-209" src={img14EconomiaEDesigualdadeNoNorte} />
      <div className="figma-826" data-node-id="156:1023" data-name="Rubrica">
        <p className="figma-827" data-node-id="156:1024" style={{ fontVariationSettings: '"wdth" 100' }}>
          ECONOMIA DA REGIÃO NORTE
        </p>
      </div>
      <p className="figma-362" data-node-id="156:1025">
        Economia e desigualdade no Norte
      </p>
      <p className="figma-363" data-node-id="156:1026" style={{ fontVariationSettings: '"wdth" 100' }}>
        Uma economia diversa precisa ser analisada junto com a distribuição dos seus benefícios.
      </p>
      <p className="figma-419" data-node-id="156:1027" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="figma-392">A</span>
        <span className="figma-383">{` Região Norte reúne Acre, Amapá, Amazonas, Pará, Rondônia, Roraima e Tocantins. Seus recursos naturais e sua produção não asseguram, por si só, renda ou alimentação adequada para toda a população. É preciso analisar como os benefícios econômicos são distribuídos. A economia nortista é diversa: serviços, indústria e agropecuária participam de formas diferentes nos sete estados. Essa diversidade impede tratar o extrativismo como a única atividade regional.`}</span>
      </p>
      <p className="figma-828" data-node-id="156:1028" style={{ fontVariationSettings: '"wdth" 100' }}>
        Nas Contas Regionais do IBGE, em 2023 os serviços representavam 61,4% do valor adicionado bruto da Região Norte; a indústria, 26,2%; e a agropecuária, 12,4%. A indústria de transformação correspondia a 12,0% do total regional e as indústrias extrativas, a 6,1%. Essas duas parcelas já estão incluídas nos 26,2% da indústria. Os percentuais descrevem a estrutura produtiva; não revelam, sozinhos, a distribuição da renda entre as famílias.
      </p>
      <p className="figma-829" data-node-id="156:1029" style={{ fontVariationSettings: '"wdth" 100' }}>
        O Polo Industrial de Manaus exemplifica a dimensão industrial do Norte. Nos indicadores parciais de 2024 da SUFRAMA, o faturamento acumulado era de aproximadamente R$ 204,4 bilhões e a média mensal de trabalhadores ocupados era de 123.489. Faturamento corresponde a vendas e difere de PIB e valor adicionado. Esses resultados devem ser lidos junto das condições de emprego, dos serviços e das possibilidades de acesso aos alimentos.
      </p>
      <p className="figma-830" data-node-id="156:1030" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fontes: IBGE, Sistema de Contas Regionais: Brasil 2023; SUFRAMA, Indicadores de Desempenho do Polo Industrial de Manaus 2019–2024. Referências completas na p. 22.
      </p>
      <EditorialMiniGlossario className="figma-395" definicoes="SUFRAMA • Superintendência da Zona Franca de Manaus. PIB • Produto Interno Bruto." />
      <div className="figma-831" data-node-id="156:1032" data-name="Composição econômica • Norte, 2023">
        <p className="figma-832" data-node-id="156:1033" style={{ fontVariationSettings: '"wdth" 100' }}>
          Participação no valor adicionado bruto da Região Norte • 2023
        </p>
        <div className="figma-833" data-node-id="156:1034" data-name="Barra de 100%">
          <div className="figma-834" data-node-id="156:1035" data-name="Parcela 61.4" />
          <div className="figma-835" data-node-id="156:1036" data-name="Parcela 26.2" />
          <div className="figma-836" data-node-id="156:1037" data-name="Parcela 12.4" />
        </div>
        <div className="figma-837" data-node-id="156:1038" data-name="Legenda">
          <div className="figma-838" data-node-id="156:1039" data-name="Serviços 61,4%">
            <div className="figma-839" data-node-id="156:1040" data-name="Cor" />
            <p className="figma-840" data-node-id="156:1041" style={{ fontVariationSettings: '"wdth" 100' }}>
              Serviços 61,4%
            </p>
          </div>
          <div className="figma-838" data-node-id="156:1042" data-name="Indústria 26,2%">
            <div className="figma-841" data-node-id="156:1043" data-name="Cor" />
            <p className="figma-840" data-node-id="156:1044" style={{ fontVariationSettings: '"wdth" 100' }}>
              Indústria 26,2%
            </p>
          </div>
          <div className="figma-838" data-node-id="156:1045" data-name="Agropecuária 12,4%">
            <div className="figma-842" data-node-id="156:1046" data-name="Cor" />
            <p className="figma-840" data-node-id="156:1047" style={{ fontVariationSettings: '"wdth" 100' }}>
              Agropecuária 12,4%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
