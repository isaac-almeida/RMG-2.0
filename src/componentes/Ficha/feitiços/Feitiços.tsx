import "../../../estilos/Feitiços.scss";
// import Feitiço from "./feitiço/Feitiço";
// import Conjuração from "./conjuração/Conjuração";
import { useState } from "react";
import Gaveta from "../../Genéricos/Gaveta";
import Pontos from "../../Genéricos/Pontos";

interface Props {
  habilidades: Object;
  feitiçaria: any;
}

const Feitiços = ({ habilidades, feitiçaria }: Props) => {
  //   const [atual, mudarFeitiço] = useState({});
  const nomesArcanas = Object.keys(feitiçaria.feitiços);

  let feitiçosArcanas: any = {};

  for (let i = 0; i < 10; i++) {
    if (feitiçaria.feitiços[nomesArcanas[i]]) {
      const listaFeitiços = [];
      const nomesFeitiços = Object.keys(feitiçaria.feitiços[nomesArcanas[i]]);
      for (let feitiço = 0; feitiço < nomesFeitiços.length; feitiço++) {
        const pontos = [];
        for (let j = 0; j < 5; j++) {
          pontos.push(
            <li key={j}>
              <img
                src="./xis.svg"
                style={{
                  opacity:
                    j >=
                    feitiçaria.feitiços[nomesArcanas[i]][nomesFeitiços[feitiço]]
                      .nível
                      ? -1
                      : 1,
                }}
              />
            </li>
          );
        }
        listaFeitiços.push(
          <li key={feitiço}>
            <p>{nomesFeitiços[feitiço]}</p>
            <ul className="pontinhos">{pontos}</ul>
          </li>
        );
      }
      feitiçosArcanas[nomesArcanas[i]] = listaFeitiços;
    }
  }

  //   function selecionaFeitiço(feitiço: any) {}

  //   for (let feitiço = 0; feitiço < listaFeitiços.length; feitiço++) {
  //     const nomeFeitiço = listaFeitiços[feitiço];
  //     componentes.push(
  //       <Feitiço
  //         nomeFeitiço={nomeFeitiço}
  //         key={feitiço}
  //         tipo={feitiços[nomeFeitiço].especialidade}
  //         select={selecionaFeitiço}
  //       />
  //     );
  //   }
  {
    /* <Conjuração
    nomeFeitiço={atual}
    detalhesFeitiço={detalhesFeitiço}
    determinantes={determinantes}
  /> */
  }
  {
    /* <table className="tabelaFeitiços">{componentes}</table> */
  }
  return (
    <Pontos
      itens={feitiçaria.arcanas}
      max={5}
      name="Feitiços"
      preenchimento={feitiçosArcanas}
      ocultarNulos={true}
    ></Pontos>
  );
};

export default Feitiços;
