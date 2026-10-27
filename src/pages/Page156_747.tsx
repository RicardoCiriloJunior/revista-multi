import React from 'react';

const imgAmazonia = "/assets/figma/156-747-1d416.png";
const imgImage3 = "/assets/figma/156-747-80679.png";
const img00Capa = "/assets/figma/156-747-d6d99.svg";

export default function Component00Capa() {
  return (
    <div className="figma-217" data-node-id="156:747" data-name="00 • Capa">
      <img alt="" className="figma-209" src={img00Capa} />
      <div className="figma-218" data-node-id="354:788" data-name="Amazônia">
        <img alt="" className="figma-206" src={imgAmazonia} />
      </div>
      <div className="figma-219" data-node-id="175:792" />
      <div className="figma-220" data-node-id="156:755" data-name="Manchete">
        <div className="figma-221" data-node-id="156:756" data-name="Group">
          <div className="figma-222" data-node-id="156:757">
            <p className="figma-223">{`TERRA RICA. `}</p>
            <p className="figma-224">{`PRATO  POBRE.`}</p>
          </div>
        </div>
        <div className="figma-225" data-node-id="175:745" style={{ containerType: "size" }}>
          <div className="figma-226">
            <div className="figma-227" data-name="image 3">
              <img alt="" className="figma-206" src={imgImage3} />
            </div>
          </div>
        </div>
        <div className="figma-228" data-node-id="175:803">
          <p className="figma-229">PRATO</p>
          <p className="figma-230">​</p>
        </div>
        <p className="figma-231" data-node-id="175:801">
          P
        </p>
        <p className="figma-232" data-node-id="175:824" style={{ fontVariationSettings: '"wdth" 100' }}>
          Fome e Insegurança Alimentar
        </p>
        <p className="figma-233" data-node-id="175:826" style={{ fontVariationSettings: '"wdth" 100' }}>
          No Brasil e no Norte.
        </p>
      </div>
    </div>
  );
}
