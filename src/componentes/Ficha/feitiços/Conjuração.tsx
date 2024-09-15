import "../../../estilos/Conjuração.scss";
import Feitiço from "./feitiço/Feitiço";
import Contador from "./conjuração/contador/Contador";
import Pontos from "../../Genéricos/Pontos";
import { useState } from "react";

interface Props {
  habilidades: any;
  feitiçaria: any;
  listaFeitiços: any;
}

const Conjuração = ({ habilidades, feitiçaria, listaFeitiços }: Props) => {
  //declaração de variáveis usadas na tabela de conjuração e nos feitiços favoritos
  const arcanas = feitiçaria.arcanas;
  const feitiçosFavoritos = feitiçaria.feitiçosFavoritos;
  const nomesFeitiçosFavoritos = Object.keys(feitiçosFavoritos);
  //objeto que contém todas as informações lidas pela tabela de conjuração. Tudo é escrito aqui, depois enviado à tabela de conjuração, que lê os dados e os exibe.
  let numeroFeitiço = 4;
  numeroFeitiço = Math.floor(Math.random() * nomesFeitiçosFavoritos.length);
  const feitiço = nomesFeitiçosFavoritos[numeroFeitiço];

  const [detalhesFeitiçoAtual, mudaDetalhesFeitiço] = useState(
    Object.assign(listaFeitiços[feitiço], Object(feitiçosFavoritos[feitiço]), {
      nomeFeitiço: feitiço,
      nívelArcana: feitiçaria.arcanas[listaFeitiços[feitiço].arcana],
      potência:
        listaFeitiços[feitiço].fator == "Potency "
          ? feitiçaria.arcanas[listaFeitiços[feitiço].arcana]
          : 1,
      duração:
        listaFeitiços[feitiço].fator == "Duration "
          ? feitiçaria.arcanas[listaFeitiços[feitiço].arcana]
          : 1,
      escala: 1,
      alcance: 0,
      reaches: 0,
      reachMin: 0,
      reachMax:
        feitiçaria.arcanas[listaFeitiços[feitiço].arcana] -
        listaFeitiços[feitiço].nível,
      potênciaAv: false,
      duraçãoAv: false,
      escalaAv: false,
      yantras: 0,
      dadosExtra: 0,
      totalDados:
        feitiçaria.arcanas[listaFeitiços[feitiço].arcana] +
        feitiçaria.gnose +
        (habilidades[feitiçosFavoritos[feitiço].skill] ?? 0),
    })
  );
  console.log("aqui");
  console.log(
    habilidades[feitiçosFavoritos[nomesFeitiçosFavoritos[numeroFeitiço]].skill]
  );

  function selecionaFeitiço(nomeFeitiço: string) {
    //função usada na mudança de feitiço da tabela de conjuração

    //variáveis que definem o limite inferior de outras variáveis
    console.log("oi");
    mudaDetalhesFeitiço(
      Object.assign(
        listaFeitiços[nomeFeitiço],
        Object(feitiçosFavoritos[nomeFeitiço]),
        {
          nomeFeitiço: nomeFeitiço,
          nívelArcana: feitiçaria.arcanas[listaFeitiços[nomeFeitiço].arcana],
          potência:
            listaFeitiços[nomeFeitiço].fator == "Potency "
              ? feitiçaria.arcanas[listaFeitiços[nomeFeitiço].arcana]
              : 1,
          duração:
            listaFeitiços[nomeFeitiço].fator == "Duration "
              ? feitiçaria.arcanas[listaFeitiços[nomeFeitiço].arcana]
              : 1,
          escala: 1,
          alcance: 0,
          reaches: 0,
          reachMin: 0,
          reachMax:
            feitiçaria.arcanas[listaFeitiços[nomeFeitiço].arcana] -
            listaFeitiços[nomeFeitiço].nível,
          potênciaAv: false,
          duraçãoAv: false,
          escalaAv: false,
          yantras: 0,
          dadosExtra: 0,
          totalDados:
            feitiçaria.arcanas[listaFeitiços[nomeFeitiço].arcana] +
            feitiçaria.gnose +
            (habilidades[feitiçosFavoritos[nomeFeitiço].skill] ?? 0),
        }
      )
    );
  }

  console.log("mudou");
  console.log(detalhesFeitiçoAtual);

  //laço que preenche componentesFeitiços, que são os feitiços da tabela de feitiços favoritos
  const componentesFeitiços = [];
  for (let f = 0; f < nomesFeitiçosFavoritos.length; f++) {
    componentesFeitiços.push(
      <Feitiço
        nomeFeitiço={nomesFeitiçosFavoritos[f]}
        key={f}
        especialidade={
          feitiçosFavoritos[nomesFeitiçosFavoritos[f]].especialidade
        }
        select={selecionaFeitiço}
      />
    );
  }
  //fim do setup da tabela de conjuração e dos feitiços favoritos

  //lista geral de feitiços
  const nomesArcanas = Object.keys(arcanas);
  let feitiçosArcanas: any = {};
  for (let i = 0; i < nomesArcanas.length; i++) {
    const feitiços = [];
    const nomesFeitiços = feitiçaria.feitiços[nomesArcanas[i]];
    for (
      let f = 0;
      f < nomesFeitiços.length && listaFeitiços[nomesFeitiços[f]];
      f++
    ) {
      feitiços.push(
        <li
          key={nomesFeitiços[f]}
          onClick={() => {
            selecionaFeitiço(nomesFeitiços[f]);
          }}
        >
          <p className="texto">
            {nomesFeitiços[f].charAt(0).toUpperCase() +
              nomesFeitiços[f].slice(1)}
          </p>
          <p className="estrelas">
            {" \u272a".repeat(listaFeitiços[nomesFeitiços[f]].nível)}
          </p>
        </li>
      );
    }
    feitiçosArcanas[nomesArcanas[i]] = feitiços;
  }
  const [arcana, mudarArcana] = useState(
    Object.keys(feitiçaria.feitiços)[
      Math.floor(Math.random() * Object.keys(feitiçaria.feitiços).length)
    ]
  );

  return (
    <div className="conjuração">
      <div className="tabelaConjuração">
        <div className="nomeFeitiço">
          <i>{detalhesFeitiçoAtual.nomeFeitiço}</i>
        </div>

        <div className="reaches">
          <Contador
            nome="Alterações"
            função={mudaDetalhesFeitiço}
            objeto={detalhesFeitiçoAtual}
            valor={{ reaches: 1 }}
            bottom={Number(detalhesFeitiçoAtual.reachMin)}
          />
        </div>
        <div className="reachesDisponíveis">
          <i>
            Alterações Disp.:
            <span>
              {detalhesFeitiçoAtual.reachMax - detalhesFeitiçoAtual.reaches}
            </span>
          </i>
        </div>
        <div className="potência">
          <Contador
            nome="Potência"
            função={mudaDetalhesFeitiço}
            objeto={detalhesFeitiçoAtual}
            valor={{ potência: 1, totalDados: -2 }}
            clica={{ potênciaAv: false, reaches: 1, reachMin: 1 }}
            bottom={
              detalhesFeitiçoAtual.fator == "Potency "
                ? detalhesFeitiçoAtual.nívelArcana
                : 1
            }
          />
        </div>
        <div className="duração">
          <Contador
            nome="Duração"
            função={mudaDetalhesFeitiço}
            objeto={detalhesFeitiçoAtual}
            valor={{ duração: 1, totalDados: -2 }}
            clica={{ duraçãoAv: false, reaches: 1, reachMin: 1 }}
            bottom={
              detalhesFeitiçoAtual.fator == "Duration "
                ? detalhesFeitiçoAtual.nívelArcana
                : 1
            }
            cap={6}
          />
        </div>
        <div className="escala">
          <Contador
            nome="Escala"
            cap={6}
            função={mudaDetalhesFeitiço}
            objeto={detalhesFeitiçoAtual}
            valor={{ escala: 1, totalDados: -2 }}
            clica={{ escalaAv: false, reaches: 1, reachMin: 1 }}
            bottom={1}
          />
        </div>
        <div className="range">
          <Contador
            nome="Alcance"
            cap={2}
            função={mudaDetalhesFeitiço}
            objeto={detalhesFeitiçoAtual}
            valor={{ alcance: 1, reachMin: 1, reaches: 1 }}
            bottom={0}
          />
        </div>
        <div className="yantras">
          <Contador
            nome="Yantras"
            cap={Math.trunc(feitiçaria.gnose / 2) + 1}
            função={mudaDetalhesFeitiço}
            objeto={detalhesFeitiçoAtual}
            valor={{ yantras: 1, totalDados: 1 }}
            bottom={0}
          />
        </div>
        <div className="dadosExtra">
          <Contador
            nome="Dados+ "
            função={mudaDetalhesFeitiço}
            objeto={detalhesFeitiçoAtual}
            valor={{ dadosExtra: 1, totalDados: 1 }}
            bottom={0}
          />
        </div>
        <div className="paradoxo">
          <i>
            Paradoxo:
            <span>
              {Number(
                detalhesFeitiçoAtual.reaches > detalhesFeitiçoAtual.reachMax &&
                  (detalhesFeitiçoAtual.reaches -
                    detalhesFeitiçoAtual.reachMax) *
                    Math.round(feitiçaria.gnose / 2)
              )}
            </span>
          </i>
        </div>
        <div className="dadosTotal">
          <i>
            Dados a rolar: <span>{detalhesFeitiçoAtual.totalDados}</span>
          </i>
        </div>
      </div>

      <table className="tabelaFeitiçosFavoritos">{componentesFeitiços}</table>
      <div className="todosFeitiços">
        <Pontos
          itens={feitiçaria.arcanas}
          max={5}
          name="Feitiços"
          ocultarNulos={true}
          evento={mudarArcana}
        >
          <div className="listaFeitiços">
            <h3>{arcana.charAt(0).toUpperCase() + arcana.slice(1)}</h3>
            <ul className="lista">{feitiçosArcanas[arcana]}</ul>
          </div>
        </Pontos>
      </div>
    </div>
  );
};

export default Conjuração;
