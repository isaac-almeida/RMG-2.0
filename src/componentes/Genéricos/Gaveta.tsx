import { ReactNode } from "react";
import { useState } from "react";
import "../../estilos/Gaveta.scss";

interface Props {
  título: string;
  ícone?: string;
  children: ReactNode;
  tamanho: string; //média ou grande ou enorme
}

const Gaveta = (props: Props) => {
  const [abertura, mudarAbertura] = useState(false);
  return (
    <div className={"gavetão ".concat(props.título)}>
      <h2>
        <li
          className={abertura ? "titulo aberto" : "titulo fechado"}
          onClick={() => {
            mudarAbertura((a) => !a);
          }}
        >
          {props.título.charAt(0).toUpperCase() + props.título.slice(1)}
        </li>
      </h2>
      <div className={abertura ? "gaveta " + props.tamanho : "gaveta"}>
        {props.children}
      </div>
    </div>
  );
};

export default Gaveta;
