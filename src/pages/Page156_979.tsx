import React from 'react';
import { Evolution } from '../interactive.jsx';

const img08EvolucaoDaInsegurancaAlimentar = "/assets/figma/196-739-e6ce3.svg";

export default function Component08EvolucaoDaInsegurancaAlimentar() {
  return (
    <div className="figma-217" data-node-id="503:586" data-name="08 • Evolução da insegurança alimentar">
      <img alt="" className="figma-209" src={img08EvolucaoDaInsegurancaAlimentar} />
      <div className="figma-457" data-node-id="503:588" data-name="Rubrica">
        <p className="figma-458" data-node-id="503:589" style={{ fontVariationSettings: '"wdth" 100' }}>
          LEVANTAMENTOS / BRASIL 2004–2024
        </p>
      </div>
      <p className="figma-362" data-node-id="503:590">
        Evolução da insegurança alimentar
      </p>
      <p className="figma-363" data-node-id="503:591" style={{ fontVariationSettings: '"wdth" 100' }}>
        Os levantamentos mostram avanço e retrocesso; as diferenças de método pedem cautela na comparação.
      </p>
      <p className="figma-459" data-node-id="503:592" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fontes: IBGE, PNAD/POF e PNAD Contínua (2004–2024); Rede PENSSAN, I e II VIGISAN (2020; 2021–22). Em 2024, os níveis arredondados somam 24,1%, enquanto o total publicado é 24,2%; a diferença de 0,1 p.p. decorre do arredondamento. Os inquéritos têm métodos distintos; compare os períodos com cautela.
      </p>
      <Evolution className="figma-460" />
      <div className="figma-461" data-node-id="503:594" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="figma-50">LEITURA CRÍTICA</p>
      </div>
      <p className="figma-462" data-node-id="503:595" style={{ fontVariationSettings: '"wdth" 100' }}>
        Algum grau de insegurança chegou a 55,2% em 2020 e 58,7% em 2021–22, superando a parcela segura. Em 2024, recuou a 24,2%, com 75,8% dos domicílios em segurança. A insegurança grave foi 9,0% e 15,5% nos levantamentos da pandemia e 3,2% em 2024. A melhora nacional não descreve igualmente todos os territórios nem a trajetória de cada família. IBGE e VIGISAN têm métodos distintos; esses pontos não formam uma série anual homogênea nem permitem atribuir causas.
      </p>
      <p className="figma-463" data-node-id="503:596" style={{ fontVariationSettings: '"wdth" 100' }}>
        FAO E ACESSO DOMICILIAR
      </p>
      <p className="figma-464" data-node-id="503:597" style={{ fontVariationSettings: '"wdth" 100' }}>
        A FAO mede a subalimentação na população; os gráficos mostram o acesso à alimentação nos domicílios. O Brasil voltou ao Mapa no triênio 2019–2021 e permaneceu fora em 2022–2024 e 2023–2025. Sair do Mapa não significa que a fome acabou.
      </p>
      <div className="figma-465" data-node-id="503:598" data-name="FAO • filete" />
    </div>
  );
}
