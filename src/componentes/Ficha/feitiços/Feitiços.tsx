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
  const [arcana, mudarArcana] = useState("");

  let feitiçosArcanas: any = {};

  for (let i = 0; i < nomesArcanas.length; i++) {
    // percorre as dez arcanas
    // verifica se há feitiços para uma determinada arcana,
    const listaFeitiços = [];
    const nomesFeitiços = Object.keys(feitiçaria.feitiços[nomesArcanas[i]]);
    for (let feitiço = 0; feitiço < nomesFeitiços.length; feitiço++) {
      listaFeitiços.push(
        <li key={nomesFeitiços[feitiço]}>
          <p>{nomesFeitiços[feitiço]}</p>
          <p className="estrelas">
            {" \u272a".repeat(
              feitiçaria.feitiços[nomesArcanas[i]][nomesFeitiços[feitiço]].nível
            )}
          </p>
        </li>
      );
    }
    feitiçosArcanas[nomesArcanas[i]] = listaFeitiços;
  }
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
      <ul className="listaFeitiços">{feitiçosArcanas[arcana]}</ul>
    </div>
  );
};

export default Feitiços;
