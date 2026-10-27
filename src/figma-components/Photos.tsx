import React from 'react';

const imgFoto04 = "/assets/figma/75-51-3abfc.png";
const imgFoto03 = "/assets/figma/75-51-b78d8.png";
const imgFoto02 = "/assets/figma/75-51-46230.png";
const imgFoto01 = "/assets/figma/75-51-5ef84.png";
const imgIndicadorDaFotoAtual = "/assets/figma/75-51-9fb97.svg";
const imgIndicadorDaFotoAtual1 = "/assets/figma/75-51-10266.svg";
const imgIndicadorDaFotoAtual2 = "/assets/figma/75-51-a64c1.svg";
const imgIndicadorDaFotoAtual3 = "/assets/figma/75-51-b9aaa.svg";

function Foto04({ className }: { className?: string }) {
  return (
    <div className={className || "figma-210"} data-node-id="75:6" data-name="Foto 04">
      <img alt="" className="figma-206" src={imgFoto04} />
    </div>
  );
}

function Foto03({ className }: { className?: string }) {
  return (
    <div className={className || "figma-210"} data-node-id="75:5" data-name="Foto 03">
      <img alt="" className="figma-206" src={imgFoto03} />
    </div>
  );
}

function Foto02({ className }: { className?: string }) {
  return (
    <div className={className || "figma-210"} data-node-id="75:4" data-name="Foto 02">
      <img alt="" className="figma-206" src={imgFoto02} />
    </div>
  );
}

function Foto01({ className }: { className?: string }) {
  return (
    <div className={className || "figma-210"} data-node-id="75:3" data-name="Foto 01">
      <img alt="" className="figma-206" src={imgFoto01} />
    </div>
  );
}

type CarrosselAutomatico4FotosProps = {
  className?: string;
  foto?: "01" | "02" | "03" | "04";
};

export default function CarrosselAutomatico4Fotos({ className, foto = "01" }: CarrosselAutomatico4FotosProps) {
  const is02 = foto === "02";
  const is03 = foto === "03";
  const is04 = foto === "04";
  return (
    <div className={className || "figma-211"} id={is04 ? "node-75_40" : is03 ? "node-75_29" : is02 ? "node-75_18" : "node-75_7"}>
      <div className={` figma-212 ${is04 ? "figma-213" : is03 ? "figma-214" : is02 ? "figma-215" : "figma-216"}`} id={is04 ? "node-75_41" : is03 ? "node-75_30" : is02 ? "node-75_19" : "node-75_8"} data-name="Sequência das quatro fotos">
        <Foto01 className="figma-207" />
        <Foto02 className="figma-207" />
        <Foto03 className="figma-207" />
        <Foto04 className="figma-207" />
      </div>
      <div className="figma-208" id={is04 ? "node-75_46" : is03 ? "node-75_35" : is02 ? "node-75_24" : "node-75_13"} data-name="Indicador da foto atual">
        <img alt="" className="figma-209" src={is04 ? imgIndicadorDaFotoAtual3 : is03 ? imgIndicadorDaFotoAtual2 : is02 ? imgIndicadorDaFotoAtual1 : imgIndicadorDaFotoAtual} />
      </div>
    </div>
  );
}
