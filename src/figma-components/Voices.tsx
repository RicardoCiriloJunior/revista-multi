import React from 'react';

type EditorialCarrosselDeCitacoesProps = {
  className?: string;
  voz?: "Mariazinha Baré" | "Neideana Ribeiro";
};

function EditorialCarrosselDeCitacoes({ className, voz = "Mariazinha Baré" }: EditorialCarrosselDeCitacoesProps) {
  const isMariazinhaBare = voz === "Mariazinha Baré";
  const isNeideanaRibeiro = voz === "Neideana Ribeiro";
  return (
    <div className={className || "figma-205"} id={isNeideanaRibeiro ? "node-50_151" : "node-50_141"}>
      <p className="figma-196" id={isNeideanaRibeiro ? "node-50_152" : "node-50_142"} style={{ fontVariationSettings: '"wdth" 100' }}>
        VOZES DA PESQUISA / ENTREVISTAS PUBLICADAS
      </p>
      <p className="figma-197" id={isNeideanaRibeiro ? "node-50_153" : "node-50_143"}>
        {isNeideanaRibeiro ? "“O Brasil sai do Mapa da Fome, mas a região Norte é uma região ainda muito vulnerabilizada.”" : "“A navegabilidade melhorou em algumas regiões, mas a questão da insegurança alimentar e a falta de água potável permanecem.”"}
      </p>
      <p className="figma-196" id={isNeideanaRibeiro ? "node-50_154" : "node-50_144"} style={{ fontVariationSettings: '"wdth" 100' }}>
        {isNeideanaRibeiro ? "NEIDEANA RIBEIRO • UNICEF" : "MARIAZINHA BARÉ • APIAM"}
      </p>
      <p className="figma-198" id={isNeideanaRibeiro ? "node-50_155" : "node-50_145"} style={{ fontVariationSettings: '"wdth" 100' }}>
        {isNeideanaRibeiro ? "Entrevista de Jhonny Lima / A Crítica, 05/10/2025 • “Fome: ‘Norte é uma região ainda muito vulnerável’.”" : "Entrevista publicada por Murilo Pajolla / Brasil de Fato, 19/01/2024."}
      </p>
      <div className="figma-199" id={isNeideanaRibeiro ? "node-50_156" : "node-50_146"} data-name="Escolha da citação">
        {isMariazinhaBare && (
          <>
            <div className="figma-200" data-node-id="50:147" data-name="Ler Mariazinha Baré">
              <p className="figma-201" data-node-id="50:148" style={{ fontVariationSettings: '"wdth" 100' }}>
                01 / Mariazinha Baré
              </p>
            </div>
            <button className="figma-202" data-node-id="50:149" data-name="Ler Neideana Ribeiro" aria-label="Ler Neideana Ribeiro">
              <div className="figma-203" data-node-id="50:150" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="figma-204">02 / Neideana Ribeiro</p>
              </div>
            </button>
          </>
        )}
        {isNeideanaRibeiro && (
          <>
            <button className="figma-202" data-node-id="50:157" data-name="Ler Mariazinha Baré" aria-label="Ler Mariazinha Baré">
              <div className="figma-203" data-node-id="50:158" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="figma-204">01 / Mariazinha Baré</p>
              </div>
            </button>
            <div className="figma-200" data-node-id="50:159" data-name="Ler Neideana Ribeiro">
              <p className="figma-201" data-node-id="50:160" style={{ fontVariationSettings: '"wdth" 100' }}>
                02 / Neideana Ribeiro
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default EditorialCarrosselDeCitacoes;

