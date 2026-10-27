import React from 'react';

type AnaliseGraficaEvolucaoDaInsegurancaAlimentarProps = {
  className?: string;
  visao?: "Geral" | "Níveis";
};

function AnaliseGraficaEvolucaoDaInsegurancaAlimentar({ className, visao = "Geral" }: AnaliseGraficaEvolucaoDaInsegurancaAlimentarProps) {
  const isGeral = visao === "Geral";
  const isNiveis = visao === "Níveis";
  return (
    <div className={className || "figma-195"} id={isNiveis ? "node-265_752" : "node-265_686"}>
      <div className="figma-49" id={isNiveis ? "node-265_753" : "node-265_687"} style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="figma-50">FIGURA 1 · BRASIL</p>
      </div>
      <div className="figma-51" id={isNiveis ? "node-265_754" : "node-265_688"} data-name="Toggle • Visão do gráfico">
        {isGeral && (
          <>
            <div className="figma-52" data-node-id="265:689" data-name="Tab • Visão Geral">
              <div className="figma-53" data-node-id="265:690" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="figma-54">Visão Geral</p>
              </div>
            </div>
            <button className="figma-55" data-node-id="265:691" data-name="Tab • Níveis" aria-label="Tab • Níveis">
              <div className="figma-56" data-node-id="265:692" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="figma-54">Níveis</p>
              </div>
            </button>
          </>
        )}
        {isNiveis && (
          <>
            <button className="figma-57" data-node-id="265:755" data-name="Tab • Visão Geral" aria-label="Tab • Visão Geral">
              <div className="figma-56" data-node-id="265:756" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="figma-54">Visão Geral</p>
              </div>
            </button>
            <div className="figma-58" data-node-id="265:757" data-name="Tab • Níveis">
              <div className="figma-53" data-node-id="265:758" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="figma-54">Níveis</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="figma-59" id={isNiveis ? "node-265_759" : "node-265_693"} style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="figma-60">{isNiveis ? "A insegurança grave avançou nos levantamentos da pandemia" : "A parcela com insegurança superou a parcela segura em 2020"}</p>
      </div>
      <div className="figma-61" id={isNiveis ? "node-265_760" : "node-265_694"} style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="figma-62">{isNiveis ? "Os níveis leve, moderado e grave compõem o total de domicílios com insegurança alimentar em cada levantamento." : "Percentual de domicílios em segurança alimentar ou com algum grau de insegurança; o total por ano é 100%."}</p>
      </div>
      <div className="figma-63" id={isNiveis ? "node-265_761" : "node-265_695"} style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="figma-50">% domicílios</p>
      </div>
      <div className="figma-64" id={isNiveis ? "node-265_762" : "node-265_696"} data-name="Grade 0" />
      <div className="figma-65" id={isNiveis ? "node-265_763" : "node-265_697"} style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="figma-50">0</p>
      </div>
      {isGeral && (
        <>
          <div className="figma-66" data-node-id="265:698" data-name="Grade 20" />
          <div className="figma-67" data-node-id="265:699" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-50">20</p>
          </div>
          <div className="figma-68" data-node-id="265:700" data-name="Grade 40" />
          <div className="figma-69" data-node-id="265:701" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-50">40</p>
          </div>
          <div className="figma-70" data-node-id="265:702" data-name="Grade 60" />
          <div className="figma-71" data-node-id="265:703" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-50">60</p>
          </div>
          <div className="figma-72" data-node-id="265:704" data-name="Grade 80" />
          <div className="figma-73" data-node-id="265:705" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-50">80</p>
          </div>
          <div className="figma-74" data-node-id="265:706" data-name="Grade 100" />
          <div className="figma-75" data-node-id="265:707" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-50">100</p>
          </div>
          <div className="figma-76" data-node-id="265:708" data-name="Barra · 2004 · Segurança alimentar" />
          <div className="figma-77" data-node-id="265:709" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">65,1%</p>
          </div>
          <div className="figma-79" data-node-id="265:710" data-name="Barra · 2004 · Algum grau de insegurança" />
          <div className="figma-80" data-node-id="265:711" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">34,9%</p>
          </div>
          <div className="figma-81" data-node-id="265:712" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2004</p>
          </div>
          <div className="figma-83" data-node-id="265:713" data-name="Barra · 2009 · Segurança alimentar" />
          <div className="figma-84" data-node-id="265:714" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">69,8%</p>
          </div>
          <div className="figma-85" data-node-id="265:715" data-name="Barra · 2009 · Algum grau de insegurança" />
          <div className="figma-86" data-node-id="265:716" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">30,2%</p>
          </div>
          <div className="figma-87" data-node-id="265:717" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2009</p>
          </div>
          <div className="figma-88" data-node-id="265:718" data-name="Barra · 2013 · Segurança alimentar" />
          <div className="figma-89" data-node-id="265:719" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">77,4%</p>
          </div>
          <div className="figma-90" data-node-id="265:720" data-name="Barra · 2013 · Algum grau de insegurança" />
          <div className="figma-91" data-node-id="265:721" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">22,6%</p>
          </div>
          <div className="figma-92" data-node-id="265:722" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2013</p>
          </div>
          <div className="figma-93" data-node-id="265:723" data-name="Barra · 2017–18 · Segurança alimentar" />
          <div className="figma-94" data-node-id="265:724" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">63,3%</p>
          </div>
          <div className="figma-95" data-node-id="265:725" data-name="Barra · 2017–18 · Algum grau de insegurança" />
          <div className="figma-96" data-node-id="265:726" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">36,7%</p>
          </div>
          <div className="figma-97" data-node-id="265:727" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2017–18</p>
          </div>
          <div className="figma-98" data-node-id="265:728" data-name="Barra · 2020* · Segurança alimentar" />
          <div className="figma-99" data-node-id="265:729" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">44,8%</p>
          </div>
          <div className="figma-100" data-node-id="265:730" data-name="Barra · 2020* · Algum grau de insegurança" />
          <div className="figma-101" data-node-id="265:731" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">55,2%</p>
          </div>
          <div className="figma-102" data-node-id="265:732" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2020*</p>
          </div>
          <div className="figma-103" data-node-id="265:733" data-name="Barra · 2021–22* · Segurança alimentar" />
          <div className="figma-104" data-node-id="265:734" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">41,3%</p>
          </div>
          <div className="figma-105" data-node-id="265:735" data-name="Barra · 2021–22* · Algum grau de insegurança" />
          <div className="figma-106" data-node-id="265:736" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">58,7%</p>
          </div>
          <div className="figma-107" data-node-id="265:737" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2021–22*</p>
          </div>
          <div className="figma-108" data-node-id="265:738" data-name="Barra · 2023 · Segurança alimentar" />
          <div className="figma-109" data-node-id="265:739" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">72,4%</p>
          </div>
          <div className="figma-110" data-node-id="265:740" data-name="Barra · 2023 · Algum grau de insegurança" />
          <div className="figma-111" data-node-id="265:741" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">27,6%</p>
          </div>
          <div className="figma-112" data-node-id="265:742" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2023</p>
          </div>
          <div className="figma-113" data-node-id="265:743" data-name="Barra · 2024 · Segurança alimentar" />
          <div className="figma-114" data-node-id="265:744" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">75,8%</p>
          </div>
          <div className="figma-115" data-node-id="265:745" data-name="Barra · 2024 · Algum grau de insegurança" />
          <div className="figma-116" data-node-id="265:746" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">24,2%</p>
          </div>
          <div className="figma-117" data-node-id="265:747" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2024</p>
          </div>
          <div className="figma-118" data-node-id="265:748" data-name="Legenda cor segurança" />
          <div className="figma-119" data-node-id="265:749" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">Segurança alimentar</p>
          </div>
          <div className="figma-120" data-node-id="265:750" data-name="Legenda cor insegurança" />
          <div className="figma-121" data-node-id="265:751" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">Algum grau de insegurança</p>
          </div>
        </>
      )}
      {isNiveis && (
        <>
          <div className="figma-122" data-node-id="265:764" data-name="Grade 10" />
          <div className="figma-123" data-node-id="265:765" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-50">10</p>
          </div>
          <div className="figma-124" data-node-id="265:766" data-name="Grade 20" />
          <div className="figma-125" data-node-id="265:767" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-50">20</p>
          </div>
          <div className="figma-126" data-node-id="265:768" data-name="Grade 30" />
          <div className="figma-127" data-node-id="265:769" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-50">30</p>
          </div>
          <div className="figma-128" data-node-id="265:770" data-name="Grade 40" />
          <div className="figma-129" data-node-id="265:771" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-50">40</p>
          </div>
          <div className="figma-130" data-node-id="265:772" data-name="Grade 50" />
          <div className="figma-131" data-node-id="265:773" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-50">50</p>
          </div>
          <div className="figma-74" data-node-id="265:774" data-name="Grade 60" />
          <div className="figma-75" data-node-id="265:775" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-50">60</p>
          </div>
          <div className="figma-132" data-node-id="265:776" data-name="Barra empilhada · 2004 · Leve" />
          <div className="figma-133" data-node-id="265:777" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">18,0%</p>
          </div>
          <div className="figma-135" data-node-id="265:778" data-name="Barra empilhada · 2004 · Moderada" />
          <div className="figma-136" data-node-id="265:779" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">9,9%</p>
          </div>
          <div className="figma-137" data-node-id="265:780" data-name="Barra empilhada · 2004 · Grave" />
          <div className="figma-138" data-node-id="265:781" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">7,0%</p>
          </div>
          <div className="figma-139" data-node-id="265:782" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">34,9%</p>
          </div>
          <div className="figma-81" data-node-id="265:783" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2004</p>
          </div>
          <div className="figma-140" data-node-id="265:784" data-name="Barra empilhada · 2009 · Leve" />
          <div className="figma-141" data-node-id="265:785" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">18,7%</p>
          </div>
          <div className="figma-142" data-node-id="265:786" data-name="Barra empilhada · 2009 · Moderada" />
          <div className="figma-143" data-node-id="265:787" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">6,5%</p>
          </div>
          <div className="figma-144" data-node-id="265:788" data-name="Barra empilhada · 2009 · Grave" />
          <div className="figma-145" data-node-id="265:789" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">5,0%</p>
          </div>
          <div className="figma-146" data-node-id="265:790" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">30,2%</p>
          </div>
          <div className="figma-87" data-node-id="265:791" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2009</p>
          </div>
          <div className="figma-147" data-node-id="265:792" data-name="Barra empilhada · 2013 · Leve" />
          <div className="figma-148" data-node-id="265:793" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">14,8%</p>
          </div>
          <div className="figma-149" data-node-id="265:794" data-name="Barra empilhada · 2013 · Moderada" />
          <div className="figma-150" data-node-id="265:795" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">4,6%</p>
          </div>
          <div className="figma-151" data-node-id="265:796" data-name="Barra empilhada · 2013 · Grave" />
          <div className="figma-152" data-node-id="265:797" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">3,2%</p>
          </div>
          <div className="figma-153" data-node-id="265:798" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">22,6%</p>
          </div>
          <div className="figma-92" data-node-id="265:799" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2013</p>
          </div>
          <div className="figma-154" data-node-id="265:800" data-name="Barra empilhada · 2017–18 · Leve" />
          <div className="figma-155" data-node-id="265:801" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">24,0%</p>
          </div>
          <div className="figma-156" data-node-id="265:802" data-name="Barra empilhada · 2017–18 · Moderada" />
          <div className="figma-157" data-node-id="265:803" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">8,1%</p>
          </div>
          <div className="figma-158" data-node-id="265:804" data-name="Barra empilhada · 2017–18 · Grave" />
          <div className="figma-159" data-node-id="265:805" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">4,6%</p>
          </div>
          <div className="figma-160" data-node-id="265:806" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">36,7%</p>
          </div>
          <div className="figma-97" data-node-id="265:807" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2017–18</p>
          </div>
          <div className="figma-161" data-node-id="265:808" data-name="Barra empilhada · 2020* · Leve" />
          <div className="figma-162" data-node-id="265:809" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">34,7%</p>
          </div>
          <div className="figma-163" data-node-id="265:810" data-name="Barra empilhada · 2020* · Moderada" />
          <div className="figma-164" data-node-id="265:811" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">11,5%</p>
          </div>
          <div className="figma-165" data-node-id="265:812" data-name="Barra empilhada · 2020* · Grave" />
          <div className="figma-166" data-node-id="265:813" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">9,0%</p>
          </div>
          <div className="figma-167" data-node-id="265:814" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">55,2%</p>
          </div>
          <div className="figma-102" data-node-id="265:815" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2020*</p>
          </div>
          <div className="figma-168" data-node-id="265:816" data-name="Barra empilhada · 2021–22* · Leve" />
          <div className="figma-169" data-node-id="265:817" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">28,0%</p>
          </div>
          <div className="figma-170" data-node-id="265:818" data-name="Barra empilhada · 2021–22* · Moderada" />
          <div className="figma-171" data-node-id="265:819" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">15,2%</p>
          </div>
          <div className="figma-172" data-node-id="265:820" data-name="Barra empilhada · 2021–22* · Grave" />
          <div className="figma-173" data-node-id="265:821" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">15,5%</p>
          </div>
          <div className="figma-174" data-node-id="265:822" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">58,7%</p>
          </div>
          <div className="figma-107" data-node-id="265:823" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2021–22*</p>
          </div>
          <div className="figma-175" data-node-id="265:824" data-name="Barra empilhada · 2023 · Leve" />
          <div className="figma-176" data-node-id="265:825" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">18,2%</p>
          </div>
          <div className="figma-177" data-node-id="265:826" data-name="Barra empilhada · 2023 · Moderada" />
          <div className="figma-178" data-node-id="265:827" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">5,3%</p>
          </div>
          <div className="figma-179" data-node-id="265:828" data-name="Barra empilhada · 2023 · Grave" />
          <div className="figma-180" data-node-id="265:829" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">4,1%</p>
          </div>
          <div className="figma-181" data-node-id="265:830" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">27,6%</p>
          </div>
          <div className="figma-112" data-node-id="265:831" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2023</p>
          </div>
          <div className="figma-182" data-node-id="265:832" data-name="Barra empilhada · 2024 · Leve" />
          <div className="figma-183" data-node-id="265:833" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">16,4%</p>
          </div>
          <div className="figma-184" data-node-id="265:834" data-name="Barra empilhada · 2024 · Moderada" />
          <div className="figma-185" data-node-id="265:835" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">4,5%</p>
          </div>
          <div className="figma-186" data-node-id="265:836" data-name="Barra empilhada · 2024 · Grave" />
          <div className="figma-187" data-node-id="265:837" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-134">3,2%</p>
          </div>
          <div className="figma-188" data-node-id="265:838" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-78">24,2%</p>
          </div>
          <div className="figma-117" data-node-id="265:839" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">2024</p>
          </div>
          <div className="figma-189" data-node-id="265:840" data-name="Legenda cor Leve" />
          <div className="figma-190" data-node-id="265:841" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">Leve</p>
          </div>
          <div className="figma-191" data-node-id="265:842" data-name="Legenda cor Moderada" />
          <div className="figma-192" data-node-id="265:843" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">Moderada</p>
          </div>
          <div className="figma-193" data-node-id="265:844" data-name="Legenda cor Grave" />
          <div className="figma-194" data-node-id="265:845" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="figma-82">Grave</p>
          </div>
        </>
      )}
    </div>
  );
}
export default AnaliseGraficaEvolucaoDaInsegurancaAlimentar;

