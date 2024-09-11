import "./contador.scss";

interface Props {
  nome: string;
  função: any;
  objeto: any;
  valor?: any;
  bottom?: number;
  cap?: number;
  clica?: any;
}

const Contador = ({
  nome,
  valor,
  objeto,
  função,
  cap = 99,
  bottom = 1,
  clica = false,
}: Props) => {
  const chavesAMudar = Object.keys(valor);
  const chavesAClicar = Object.keys(clica);
  function aumenta() {
    if (objeto[chavesAMudar[0]] < cap) {
      const mudanças: any = {};
      for (let i = 0; i < chavesAMudar.length; i += 1) {
        mudanças[chavesAMudar[i]] =
          objeto[chavesAMudar[i]] + valor[chavesAMudar[i]];
      }
      função((d: any) => ({
        ...d,
        ...mudanças,
      }));
    }
  }
  function diminui() {
    if (objeto[chavesAMudar[0]] > bottom) {
      const mudanças: any = {};
      for (let i = 0; i < chavesAMudar.length; i += 1) {
        mudanças[chavesAMudar[i]] =
          objeto[chavesAMudar[i]] - valor[chavesAMudar[i]];
      }
      função((d: any) => ({
        ...d,
        ...mudanças,
      }));
    }
  }
  let título = <h4>{nome}: </h4>;
  if (clica) {
    título = (
      <h4
        onClick={() => {
          const mudanças: any = {
            [chavesAClicar[0]]: !objeto[chavesAClicar[0]],
          };
          for (let i = 1; i < chavesAClicar.length; i += 1) {
            mudanças[chavesAClicar[i]] =
              objeto[chavesAClicar[i]] +
              clica[chavesAClicar[i]] *
                (Number(mudanças[chavesAClicar[0]]) * 2 - 1);
          }
          console.log("mudanças");
          console.log(mudanças);
          função((d: any) => ({
            ...d,
            ...mudanças,
          }));
        }}
        style={{
          cursor: "pointer",
          opacity: 0.8 + 0.5 * (objeto[chavesAClicar[0]] ? 1 : 0),
          textShadow: objeto[chavesAClicar[0]] ? "#ff0000 3px 0 8px" : "none",
        }}
      >
        {nome}:{" "}
      </h4>
    );
  }

  return (
    <div className="contador">
      {título}
      <div className="container">
        <span onClick={aumenta}>
          {Number(objeto[chavesAMudar[0]]).toFixed(0)}
        </span>
      </div>
      <button className="baixo" onClick={diminui}>
        <a className="menos">-</a>
      </button>
    </div>
  );
};

export default Contador;
