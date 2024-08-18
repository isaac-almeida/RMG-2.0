import Gaveta from "./Gaveta";
import "../../estilos/Pontos.scss";

interface Props {
  itens: any;
  max: number;
  name: string;
  tamanho?: string;
  ocultarNulos?: boolean;
  preenchimento?: any; //dicionário com listas de conteúdo
}

const Pontos = ({
  itens,
  max,
  name,
  tamanho,
  ocultarNulos,
  preenchimento,
}: Props) => {
  const nomesItens = Object.keys(itens);
  const lista = [];
  for (let j = 0; j < nomesItens.length; j++) {
    const pontos = [];
    if (!(itens[nomesItens[j]] == 0 && ocultarNulos)) {
      for (let i = 0; i < max; i++) {
        pontos.push(
          <li key={i}>
            <img
              src="./xis.svg"
              style={{ opacity: i >= itens[nomesItens[j]] ? -1 : 1 }}
            />
          </li>
        );
      }

      let conteúdo = <div></div>;
      if (preenchimento) {
        console.log(preenchimento[nomesItens[j]]);
        conteúdo = preenchimento[nomesItens[j]];
      }

      lista.push(
        <li className="pontuação" key={nomesItens[j]}>
          <p>
            {nomesItens[j].charAt(0).toUpperCase() +
              nomesItens[j].slice(1) +
              ": "}
          </p>
          <ul className="pontinhos">{pontos}</ul>
          <ul className="conteúdo">{conteúdo}</ul>
        </li>
      );
    }
  }

  return (
    // <div className="pontos">
    <Gaveta título={name} tamanho={tamanho ? tamanho : "grande"}>
      <ul className={"pontos"}>{lista}</ul>
    </Gaveta>
    // </div>
  );
};

export default Pontos;
