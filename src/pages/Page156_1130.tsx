import React from 'react';

const imgGroup = "/assets/figma/156-1130-c143b.svg";
const imgGroup1 = "/assets/figma/156-1130-1efc5.svg";
const imgGroup2 = "/assets/figma/156-1130-763ec.svg";
const img21PoliticasDeCombateAFome = "/assets/figma/196-739-e6ce3.svg";

type EditorialCondicoesDeAcessoProps = {
  className?: string;
  tema?: "Renda" | "Produção local" | "Transporte";
};

function EditorialCondicoesDeAcesso({ className, tema = "Renda" }: EditorialCondicoesDeAcessoProps) {
  const isProducaoLocal = tema === "Produção local";
  const isRenda = tema === "Renda";
  const isTransporte = tema === "Transporte";
  return (
    <div className={className || "figma-921"} id={isTransporte ? "node-54_193" : isProducaoLocal ? "node-54_186" : "node-54_178"}>
      {isRenda && (
        <>
          <div className="figma-900" data-node-id="54:179" data-name="Ilustração / Renda">
            <div className="figma-901" data-node-id="54:180" data-name="Group">
              <div className="figma-902">
                <img alt="" className="figma-691" src={imgGroup} />
              </div>
            </div>
          </div>
          <div className="figma-903" data-node-id="54:183" data-name="Legenda">
            <p className="figma-904" data-node-id="54:184" style={{ fontVariationSettings: '"wdth" 100' }}>
              Renda
            </p>
            <p className="figma-905" data-node-id="54:185" style={{ fontVariationSettings: '"wdth" 100' }}>
              Condições para comprar alimentos.
            </p>
          </div>
        </>
      )}
      {isProducaoLocal && (
        <>
          <div className="figma-900" data-node-id="54:187" data-name="Ilustração / Produção local">
            <div className="figma-906" data-node-id="54:188" data-name="Group">
              <div className="figma-907">
                <img alt="" className="figma-691" src={imgGroup1} />
              </div>
            </div>
          </div>
          <div className="figma-903" data-node-id="54:190" data-name="Legenda">
            <p className="figma-904" data-node-id="54:191" style={{ fontVariationSettings: '"wdth" 100' }}>
              Produção local
            </p>
            <p className="figma-905" data-node-id="54:192" style={{ fontVariationSettings: '"wdth" 100' }}>
              Trabalho e conhecimentos do território.
            </p>
          </div>
        </>
      )}
      {isTransporte && (
        <>
          <div className="figma-900" data-node-id="54:194" data-name="Ilustração / Transporte">
            <div className="figma-908" data-node-id="54:195" data-name="Group">
              <div className="figma-909">
                <img alt="" className="figma-691" src={imgGroup2} />
              </div>
            </div>
          </div>
          <div className="figma-903" data-node-id="54:197" data-name="Legenda">
            <p className="figma-904" data-node-id="54:198" style={{ fontVariationSettings: '"wdth" 100' }}>
              Transporte
            </p>
            <p className="figma-905" data-node-id="54:199" style={{ fontVariationSettings: '"wdth" 100' }}>
              Caminhos para a comida chegar.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function Component21PoliticasDeCombateAFome() {
  return (
    <div className="figma-217" data-node-id="156:1130" data-name="21 • Políticas de combate à fome">
      <img alt="" className="figma-209" src={img21PoliticasDeCombateAFome} />
      <div className="figma-910" data-node-id="156:1132" data-name="Rubrica">
        <p className="figma-911" data-node-id="156:1133" style={{ fontVariationSettings: '"wdth" 100' }}>
          POLÍTICAS, RENDAS....
        </p>
      </div>
      <p className="figma-362" data-node-id="156:1134">
        Políticas de combate à fome
      </p>
      <p className="figma-363" data-node-id="156:1135" style={{ fontVariationSettings: '"wdth" 100' }}>
        Renda, serviços, produção local e proteção territorial precisam ser pensados em conjunto.
      </p>
      <p className="figma-912" data-node-id="156:1136">
        <span className="figma-837">O</span>
        <span className="figma-838" style={{ fontVariationSettings: '"wdth" 100' }}>{` enfrentamento da fome envolve proteção de renda, acesso à água, saúde, educação, transporte e condições de produzir alimentos. A pesquisa não aponta uma medida isolada capaz de resolver todos esses problemas. A combinação das ações precisa considerar o território, os custos e a participação das pessoas atendidas. A alimentação escolar pode aproximar o acesso à comida e o cotidiano da educação. Sua análise deve distinguir oferta, consumo e qualidade das refeições. A existência de um programa não comprova que todas as barreiras de acesso foram superadas; por isso, acompanhar sua execução é parte do debate sobre direitos. Para a agricultura familiar e a produção comunitária, infraestrutura de armazenamento, processamento e circulação pode ampliar possibilidades de renda. A organização coletiva e a assistência técnica também aparecem nas experiências discutidas.`}</span>
      </p>
      <p className="figma-913" data-node-id="156:1137" style={{ fontVariationSettings: '"wdth" 100' }}>
        Uma proposta de intervenção deve transformar o direito em metas verificáveis. Recomendamos que o Ministério do Desenvolvimento e Assistência Social (MDS) pactue com estados, municípios, Conab e conselhos de segurança alimentar um plano regional para o abastecimento amazônico. Por meio do PAA, de entrepostos fluviais e de apoio técnico a cooperativas, o plano deve conectar a produção local aos serviços públicos de alimentação e prever secas e cheias. Povos indígenas e comunidades ribeirinhas devem participar da escolha dos locais e dos alimentos, com respeito a seus territórios e práticas culturais. Os órgãos participantes devem divulgar anualmente compras, comunidades atendidas, produtores envolvidos e falhas de transporte. O objetivo é reduzir interrupções no acesso e gerar renda.
      </p>
      <p className="figma-914" data-node-id="156:1138" style={{ fontVariationSettings: '"wdth" 100' }}>
        Recomendação da pesquisa do grupo: plano proposto, ainda não implantado. Avaliar a execução por compras realizadas, comunidades atendidas e regularidade do abastecimento. Referências completas na p. 22.
      </p>
      <EditorialCondicoesDeAcesso className="figma-915" />
      <EditorialCondicoesDeAcesso className="figma-916" tema="Produção local" />
      <EditorialCondicoesDeAcesso className="figma-917" tema="Transporte" />
      <div className="figma-918" data-node-id="298:897" data-name="Proposta territorial • filete" />
      <p className="figma-919" data-node-id="298:898" style={{ fontVariationSettings: '"wdth" 100' }}>
        PRIORIDADE TERRITORIAL • NORTE
      </p>
      <p className="figma-920" data-node-id="298:899" style={{ fontVariationSettings: '"wdth" 100' }}>
        Proposta da análise: ampliar o PAA para compras da produção local; estruturar entrepostos fluviais e estoques comunitários; financiar infraestrutura resiliente a secas; e ampliar a amostra do IBGE entre povos indígenas e comunidades ribeirinhas. São recomendações, não ações já implantadas.
      </p>
    </div>
  );
}
