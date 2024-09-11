// import { motion } from "framer-motion";
import "../../estilos/Ficha.scss";
import "../../estilos/Habilidades.scss";
import "../../estilos/Atributos.scss";
import "../../estilos/Identificação.scss";

import fichas from "../../assets/fichas.json";
import listaFeitiços from "../../assets/feitiços.json";
import Gaveta from "../Genéricos/Gaveta";
import Pontos from "../Genéricos/Pontos";

import Status from "./status/Status";
import Feitiços from "./feitiços/Feitiços";
import Conjuração from "./feitiços/Conjuração";

const ficha = fichas["adrino"];

function Ficha() {
  // ajuste do tamanho do nome
  function getTamanhoFonteNome(nome: string) {
    let maiorTamanho = 0;
    nome
      .split(" ")
      .forEach((palavra) =>
        palavra.length > maiorTamanho ? (maiorTamanho = palavra.length) : {}
      );
    let tamanhoFonte = 150 / maiorTamanho;

    if (tamanhoFonte < 40) {
      tamanhoFonte = 40;
    }

    return tamanhoFonte;
  }
  return (
    <div className="wrapper">
      <div className="ficha">
        <div className="identificação">
          <div className="pfpContainer">
            <img
              src="./saske.png"
              alt={ficha.identificação.nome + ", " + ficha.identificação.titulo}
            />
          </div>
          <div className="profileInfo">
            <div
              className="nome"
              style={{
                fontSize: getTamanhoFonteNome(ficha.identificação.nome) + "px",
              }}
            >
              {ficha.identificação.nome}
            </div>
            <div
              className="titulo"
              style={{
                fontSize:
                  getTamanhoFonteNome(ficha.identificação.nome) * 0.6 + "px",
              }}
            >
              {ficha.identificação.titulo}
            </div>
          </div>
        </div>
        <Status status={ficha.status} />
        <Pontos
          itens={ficha.atributos}
          max={5}
          name="atributos"
          tamanho="grande"
        />
        <Gaveta título="habilidades" tamanho="enorme">
          <Pontos
            itens={ficha.habilidades}
            max={5}
            name="mentais"
            range={[0, 8]}
            ocultarNulos={true}
          />
          <Pontos
            itens={ficha.habilidades}
            max={5}
            name="físicas"
            range={[8, 16]}
            ocultarNulos={true}
          />
          <Pontos
            itens={ficha.habilidades}
            max={5}
            name="sociais"
            range={[16, 24]}
            ocultarNulos={true}
          />
        </Gaveta>
        <Conjuração
          habilidades={ficha.habilidades}
          feitiçaria={ficha.feitiçaria}
          listaFeitiços={listaFeitiços}
        />
      </div>
    </div>
  );
}

export default Ficha;
