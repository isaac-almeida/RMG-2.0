import Gaveta from "./Gaveta";
import "../../estilos/Pontos.scss";

interface Props {
  itens: any;
  max: number;
  name: string;
  range?: any;
  tamanho?: string;
  ocultarNulos?: boolean;
  evento?: any; //dicionário com listas de conteúdo
  children?: any;
}

const Pontos = ({
  itens,
  max,
  name,
  range = [0, Object.keys(itens).length],
  tamanho,
  ocultarNulos,
  evento,
  children,
}: Props) => {
  const nomesItens = Object.keys(itens);
  const lista = [];
  for (let j = range[0]; j < range[1]; j++) {
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

      lista.push(
        <li
          className="pontuação"
          key={nomesItens[j]}
          onClick={() => {
            evento(nomesItens[j]);
          }}
        >
          <p>
            {nomesItens[j].charAt(0).toUpperCase() +
              nomesItens[j].slice(1) +
              ": "}
          </p>
          <ul className="pontinhos">{pontos}</ul>
        </li>
      );
    }
  }

  return (
    // <div className="pontos">
    <Gaveta título={name} tamanho={tamanho ? tamanho : "grande"}>
      <ul className={"pontos"}>{lista}</ul>
      {children}
    </Gaveta>
    // </div>
  );
};

export default Pontos;
