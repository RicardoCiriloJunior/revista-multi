import React from 'react';

const imgRetratoJosueDeCastro = "/assets/figma/156-933-fd1a3.png";
const imgRetratoAmartyaSen = "/assets/figma/156-933-29bcd.png";

type EditorialPensadoresInterativosProps = {
  className?: string;
  destaque?: "Josué de Castro" | "Amartya Sen";
};

function EditorialPensadoresInterativos({ className, destaque = "Josué de Castro" }: EditorialPensadoresInterativosProps) {
  const isAmartyaSen = destaque === "Amartya Sen";
  const isJosueDeCastro = destaque === "Josué de Castro";
  return (
    <div className={className || "figma-48"} id={isAmartyaSen ? "node-47_17" : "node-47_3"}>
      {isJosueDeCastro && (
        <>
          <div className="figma-34" data-node-id="47:4" data-name="Perfil / Josué de Castro">
            <div className="figma-35" data-node-id="48:14" data-name="Cabeça do perfil">
              <div className="figma-36" data-node-id="47:5" data-name="Retrato / Josué de Castro">
                <img alt="" className="figma-37" src={imgRetratoJosueDeCastro} />
              </div>
              <div className="figma-38" data-node-id="48:15" data-name="Identificação">
                <p className="figma-39" data-node-id="47:6">
                  Josué de Castro
                </p>
                <p className="figma-40" data-node-id="47:8" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Médico e geógrafo • Brasil
                </p>
                <p className="figma-40" data-node-id="47:10" style={{ fontVariationSettings: '"wdth" 100' }}>
                  1946 / GEOGRAFIA DA FOME
                </p>
              </div>
            </div>
            <p className="figma-41" data-node-id="47:9" style={{ fontVariationSettings: '"wdth" 100' }}>
              Em Geografia da Fome (1946), relacionou a alimentação às condições econômicas e sociais. Questionou a ideia de que a fome seria um destino natural. Sua obra ajuda a analisar como renda, produção e distribuição afetam o acesso à comida.
            </p>
          </div>
          <button className="figma-42" data-node-id="47:11" data-name="Perfil / Amartya Sen" aria-label="Perfil / Amartya Sen">
            <div className="figma-43" data-node-id="48:16" data-name="Cabeça do perfil">
              <div className="figma-36" data-node-id="47:12" data-name="Retrato / Amartya Sen">
                <img alt="" className="figma-37" src={imgRetratoAmartyaSen} />
              </div>
              <div className="figma-44" data-node-id="48:17" data-name="Identificação">
                <p className="figma-45" data-node-id="47:13">
                  Amartya Sen
                </p>
                <p className="figma-46" data-node-id="47:14" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Economista • Índia
                </p>
                <p className="figma-46" data-node-id="47:16" style={{ fontVariationSettings: '"wdth" 100' }}>
                  1981 / POVERTY AND FAMINES
                </p>
              </div>
            </div>
            <p className="figma-47" data-node-id="47:15" style={{ fontVariationSettings: '"wdth" 100' }}>
              Em Poverty and Famines (1981), distinguiu a disponibilidade de alimentos da capacidade de obtê-los. Renda, trabalho e recursos determinam o acesso. Recebeu o prêmio de Economia em 1998. Sua abordagem explica a privação mesmo quando há comida.
            </p>
          </button>
        </>
      )}
      {isAmartyaSen && (
        <>
          <button className="figma-42" data-node-id="47:18" data-name="Perfil / Josué de Castro" aria-label="Perfil / Josué de Castro">
            <div className="figma-43" data-node-id="48:18" data-name="Cabeça do perfil">
              <div className="figma-36" data-node-id="47:19" data-name="Retrato / Josué de Castro">
                <img alt="" className="figma-37" src={imgRetratoJosueDeCastro} />
              </div>
              <div className="figma-44" data-node-id="48:19" data-name="Identificação">
                <p className="figma-45" data-node-id="47:20">
                  Josué de Castro
                </p>
                <p className="figma-46" data-node-id="47:21" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Médico e geógrafo • Brasil
                </p>
                <p className="figma-46" data-node-id="47:23" style={{ fontVariationSettings: '"wdth" 100' }}>
                  1946 / GEOGRAFIA DA FOME
                </p>
              </div>
            </div>
            <p className="figma-47" data-node-id="47:22" style={{ fontVariationSettings: '"wdth" 100' }}>
              Em Geografia da Fome (1946), relacionou a alimentação às condições econômicas e sociais. Questionou a ideia de que a fome seria um destino natural. Sua obra ajuda a analisar como renda, produção e distribuição afetam o acesso à comida.
            </p>
          </button>
          <div className="figma-34" data-node-id="47:24" data-name="Perfil / Amartya Sen">
            <div className="figma-35" data-node-id="48:20" data-name="Cabeça do perfil">
              <div className="figma-36" data-node-id="47:25" data-name="Retrato / Amartya Sen">
                <img alt="" className="figma-37" src={imgRetratoAmartyaSen} />
              </div>
              <div className="figma-38" data-node-id="48:21" data-name="Identificação">
                <p className="figma-39" data-node-id="47:26">
                  Amartya Sen
                </p>
                <p className="figma-40" data-node-id="47:27" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Economista • Índia
                </p>
                <p className="figma-40" data-node-id="47:29" style={{ fontVariationSettings: '"wdth" 100' }}>
                  1981 / POVERTY AND FAMINES
                </p>
              </div>
            </div>
            <p className="figma-41" data-node-id="47:28" style={{ fontVariationSettings: '"wdth" 100' }}>
              Em Poverty and Famines (1981), distinguiu a disponibilidade de alimentos da capacidade de obtê-los. Renda, trabalho e recursos determinam o acesso. Recebeu o prêmio de Economia em 1998. Sua abordagem explica a privação mesmo quando há comida.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
export default EditorialPensadoresInterativos;

