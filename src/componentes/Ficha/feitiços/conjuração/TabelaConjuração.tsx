import "./tabelaConjuração.scss";
import Contador from "./contador/Contador";
import { useState } from "react";

interface Props {
  nomeFeitiço: any;
  detalhesFeitiço: any;
  gnose: number;
}

const tabelaConjuração = ({ nomeFeitiço, detalhesFeitiço, gnose }: Props) => {
  const [botãoFator, mudaFator] = useState(false);

  const [alcance, mudaAlcance] = useState(0);
  const [escalaAv, recolocaEscala] = useState(false);
  const [duraçãoAv, recolocaDuração] = useState(false);
  const [potênciaAv, recolocaPotência] = useState(false);
  const [limiteInfReach, mudaLim] = useState(0);

  const [reaches, mudaReach] = useState(0);
  let totalReaches =
    detalhesFeitiço.nívelArcana - detalhesFeitiço.nível - reaches;
  let paradoxo =
    totalReaches < 0 ? totalReaches * -1 * Math.round(gnose / 2) : 0;

  const [yantras, mudaYantras] = useState(0);

  const ini_pot =
    detalhesFeitiço.fator == "Potency " ? detalhesFeitiço.nívelArcana : 1;
  const ini_dur =
    detalhesFeitiço.fator == "Duration " ? detalhesFeitiço.nívelArcana : 1;

  const [escala, mudaEscala] = useState(1);
  const [potência, mudaPotência] = useState(ini_pot);
  const [duração, mudaDuração] = useState(ini_dur);
  const [dadosAdicionais, mudaDadosAdicionais] = useState(0);

  let totalDados =
    gnose +
    detalhesFeitiço.nívelArcana +
    dadosAdicionais -
    (escala - 1) * 2 -
    (potência - ini_pot) * 2 -
    (duração - ini_dur) * 2 +
    yantras;

  console.log(nomeFeitiço);
  console.log("gnose: " + gnose);
  console.log("nívelArcana: " + detalhesFeitiço.nívelArcana);
  console.log("dadosAdicionais: " + dadosAdicionais);
  console.log("escala: " + escala);
  console.log("potência: " + potência);
  console.log("duração: " + duração);
  console.log("ini_pot: " + ini_pot);
  console.log("ini_dur: " + ini_dur);
  console.log("yantras: " + yantras);

  const reach = {
    aumenta: () => {
      mudaReach((a) => a + 1);
    },
    diminui: () => {
      mudaReach((a) => a - 1);
    },
    valor: reaches,
  };
  const dadosAdd = {
    aumenta: () => {
      mudaDadosAdicionais((a) => a + 1);
    },
    diminui: () => {
      mudaDadosAdicionais((a) => a - 1);
    },
    valor: dadosAdicionais,
  };
  const altEscala = {
    aumenta: () => {
      mudaEscala((a) => a + 1);
    },
    diminui: () => {
      mudaEscala((a) => a - 1);
    },
    valor: escala,
  };
  const altPotência = {
    aumenta: () => {
      mudaPotência((a: number) => a + 1);
    },
    diminui: () => {
      mudaPotência((a: number) => a - 1);
    },
    valor: () => {
      mudaPotência(potência);
      return potência;
    },
  };
  const altDuração = {
    aumenta: () => {
      mudaDuração((a: number) => a + 1);
    },
    diminui: () => {
      mudaDuração((a: number) => a - 1);
    },
    valor: () => {
      mudaDuração(duração);
      return duração;
    },
  };
  const altYantras = {
    aumenta: () => {
      mudaYantras((a: number) => a + 1);
    },
    diminui: () => {
      mudaYantras((a: number) => a - 1);
    },
    valor: yantras,
  };
  const avEscala = {
    avança: () => {
      recolocaEscala((a) => !a);
      mudaReach((a) => a + 1);
      mudaLim((a) => a + 1);
    },
    retrocede: () => {
      recolocaEscala((a) => !a);
      mudaReach((a) => a - 1);
      mudaLim((a) => a - 1);
    },
    status: escalaAv,
  };
  const avPotência = {
    avança: () => {
      recolocaPotência((a) => !a);
      mudaReach((a) => a + 1);
      mudaLim((a) => a + 1);
    },
    retrocede: () => {
      recolocaPotência((a) => !a);
      mudaReach((a) => a - 1);
      mudaLim((a) => a - 1);
    },
    status: potênciaAv,
  };
  const avDuração = {
    avança: () => {
      recolocaDuração((a) => !a);
      mudaReach((a) => a + 1);
      mudaLim((a) => a + 1);
    },
    retrocede: () => {
      recolocaDuração((a) => !a);
      mudaReach((a) => a - 1);
      mudaLim((a) => a - 1);
    },
    status: duraçãoAv,
  };
  const altAlcance = {
    aumenta: () => {
      mudaAlcance((a) => a + 1);
      mudaReach((a) => a + 1);
      mudaLim((a) => a + 1);
    },
    diminui: () => {
      mudaAlcance((a) => a - 1);
      mudaReach((a) => a - 1);
      mudaLim((a) => a - 1);
    },
    valor: alcance,
  };

  return (
    <div className="conjuração">
      <div className="nome">
        Conjuração: <i>{nomeFeitiço}</i>
      </div>

      <div className="reaches">
        <Contador nome="Reaches" função={reach} bottom={limiteInfReach} />
      </div>

      <div className="totalReaches">
        <i>
          Rch disponíveis: <span>{totalReaches}</span>
        </i>
      </div>

      <div className="range">
        <Contador nome="Alcance" cap={2} função={altAlcance} />
      </div>

      <div className="escala">
        <Contador
          nome="Escala"
          cap={6}
          função={altEscala}
          clica={avEscala}
          bottom={1}
        />
      </div>

      <div className="potência">
        <div className="troca">
          <img
            src="setas.png"
            onClick={() => {
              if (!botãoFator) {
                mudaReach((a) => a + 1);
                mudaLim((a) => a + 1);
                mudaFator((a) => !a);
              } else {
                mudaReach((a) => a - 1);
                mudaLim((a) => a - 1);
                mudaFator((a) => !a);
              }
            }}
            style={{
              opacity: 0.4 + 0.5 * (botãoFator ? 1 : 0),
              textShadow: botãoFator ? "#ff0000 3px 0 8px" : "none",
            }}
          />
        </div>
        <Contador
          nome="Potência"
          função={altPotência}
          clica={avPotência}
          bottom={1}
        />
      </div>

      <div className="duração">
        <Contador
          nome="Duração"
          cap={6}
          função={altDuração}
          clica={avDuração}
          bottom={1}
        />
      </div>

      <div className="yantras">
        <Contador
          nome="Yantras"
          função={altYantras}
          cap={Math.round(gnose / 2) + 1}
        />
      </div>

      <div className="dadosExtra">
        <Contador nome="Dados+ " função={dadosAdd} />
      </div>

      <div className="paradoxo">
        <i>
          Paradoxo: <span>{paradoxo}</span>
        </i>
      </div>

      <div className="dadosTotal">
        <i>
          Dados a rolar: <span>{totalDados}</span>
        </i>
      </div>
    </div>
  );
};

export default tabelaConjuração;
