// import { motion } from "framer-motion";
import "../../estilos/Ficha.scss";
import "../../estilos/Habilidades.scss";
import "../../estilos/Atributos.scss";

import fichas from "../../assets/fichas.json";
import Gaveta from "../Genéricos/Gaveta";
import Pontos from "../Genéricos/Pontos";

import Status from "./status/Status";
import Feitiços from "./feitiços/Feitiços";

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
    let tamanhoFonte = 180 / maiorTamanho;

    if (tamanhoFonte < 30) {
      tamanhoFonte = 30;
    }

    return tamanhoFonte;
  }
  return (
    <div className="wrapper">
      <div className="ficha">
        <div className="identificação">
          <div className="pfpContainer">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/5/57/Emoji_u1f61d.svg"
              }
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
            itens={ficha.habilidades.mentais}
            max={5}
            name="mentais"
            ocultarNulos={true}
          />
          <Pontos
            itens={ficha.habilidades.físicas}
            max={5}
            name="físicas"
            ocultarNulos={true}
          />
          <Pontos
            itens={ficha.habilidades.sociais}
            max={5}
            name="sociais"
            ocultarNulos={true}
          />
        </Gaveta>
        {/* <Feitiços
          habilidades={ficha.habilidades}
          feitiçaria={ficha.feitiçaria}
        /> */}
      </div>
    </div>
  );
}

export default Ficha;
