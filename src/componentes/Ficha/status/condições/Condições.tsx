import "../../../../estilos/Condições.scss";
import Gaveta from "../../../Genéricos/Gaveta";

const Condições = ({ condições }: any) => {
  let elementos: any = [];
  const nomesCondições = Object.keys(condições);
  for (let i = 0; i < nomesCondições.length; i++) {
    const cond = condições[nomesCondições[i]];
    elementos.push(
      <li key={i}>
        <Gaveta título={nomesCondições[i]} ícone={cond.img} tamanho="média">
          <div className="condição">
            <p>{cond.efeito}</p>
            <span className="fonte">Fonte: {cond.fonte}</span>
            <span className="duração">Duração: {cond.duração}</span>
          </div>
        </Gaveta>
      </li>
    );
  }
  return (
    <div className="condições">
      <h4>Condições:</h4>
      <ul className="listaCondições">{elementos}</ul>
    </div>
  );
};

export default Condições;
