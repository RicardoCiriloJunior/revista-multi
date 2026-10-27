import React from 'react';
import { Thinkers } from '../interactive.jsx';

const imgRetratoJosueDeCastro = "/assets/figma/156-933-fd1a3.png";
const imgRetratoAmartyaSen = "/assets/figma/156-933-29bcd.png";
const img05JosueDeCastroEAmartyaSen = "/assets/figma/196-739-e6ce3.svg";

export default function Component05JosueDeCastroEAmartyaSen() {
  return (
    <div className="figma-217" data-node-id="156:933" data-name="05 • Josué de Castro e Amartya Sen">
      <img alt="" className="figma-209" src={img05JosueDeCastroEAmartyaSen} />
      <div className="figma-399" data-node-id="156:935" data-name="Rubrica">
        <p className="figma-400" data-node-id="156:936" style={{ fontVariationSettings: '"wdth" 100' }}>
          IDEIAS DE JOSUÉ DE CASTRO E AMARTYA SEN
        </p>
      </div>
      <p className="figma-362" data-node-id="156:937">
        Josué de Castro e Amartya Sen
      </p>
      <p className="figma-363" data-node-id="156:938" style={{ fontVariationSettings: '"wdth" 100' }}>
        Conheça os pensadores que revelaram que a fome vai muito além da falta de comida.
      </p>
      <p className="figma-401" data-node-id="156:939" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fontes: Vasconcelos (2008); Silva e Nunes (2017); Schappo (2014); Prêmio de Ciências Econômicas em Memória de Alfred Nobel (1998). Referências completas na p. 22.
      </p>
      <Thinkers className="figma-402" />
      <div className="figma-403" data-node-id="156:941" data-name="Síntese da comparação">
        <p className="figma-404" data-node-id="156:942" style={{ fontVariationSettings: '"wdth" 100' }}>
          Produção, renda e direitos: duas contribuições para analisar o acesso à comida no Norte.
        </p>
      </div>
    </div>
  );
}
