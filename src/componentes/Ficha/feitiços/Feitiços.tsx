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
  //código que encontra a primeira arcana com feitiços
  const nomesArcanas = Object.keys(feitiçaria.feitiços);

  let feitiçosArcanas: any = {};
  let arcanasValidas = [];

  for (let i = 0; i < nomesArcanas.length; i++) {
    // percorre as dez arcanas
    // verifica se há feitiços para uma determinada arcana,
    const listaFeitiços = [];
    const nomesFeitiços = Object.keys(feitiçaria.feitiços[nomesArcanas[i]]);
    if (nomesFeitiços.length > 0) {
      arcanasValidas.push(nomesArcanas[i]);
      for (let feitiço = 0; feitiço < nomesFeitiços.length; feitiço++) {
        listaFeitiços.push(
          <li key={nomesFeitiços[feitiço]}>
            <p className="texto">
              {nomesFeitiços[feitiço].charAt(0).toUpperCase() +
                nomesFeitiços[feitiço].slice(1)}
              z
            </p>
            <p className="estrelas">
              {" \u272a".repeat(
                feitiçaria.feitiços[nomesArcanas[i]][nomesFeitiços[feitiço]]
                  .nível
              )}
            </p>
          </li>
        );
      }
    }
    feitiçosArcanas[nomesArcanas[i]] = listaFeitiços;
  }
  const [arcana, mudarArcana] = useState(
    arcanasValidas[Math.floor(Math.random() * arcanasValidas.length)]
  );
  {
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
  }
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
    <div>
      <Pontos
        itens={feitiçaria.arcanas}
        max={5}
        name="Feitiços"
        ocultarNulos={true}
        evento={mudarArcana}
      />
      <div className="listaFeitiços">
        <h3>{arcana.charAt(0).toUpperCase() + arcana.slice(1)}</h3>
        <ul className="lista">{feitiçosArcanas[arcana]}</ul>
      </div>
    </div>
  );
};

export default Feitiços;
