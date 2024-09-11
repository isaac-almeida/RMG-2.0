import "../../../estilos/Status.scss";
import BarraPv from "./barraPv/BarraPv";
import BarraMana from "./barraMana/BarraMana";
import Fdv from "./fdv/Fdv";
import Pds from "./pds/Pds";
import Condições from "./condições/Condições";

const Status = ({ status }: any) => {
  return (
    <div className="status">
      <BarraPv pvAtual={status.pvAtual} />
      <BarraMana manaAtual={status.manaAtual} manaMax={status.manaMax} />
      <Fdv fdvMax={status.fdvMax} fdvAtual={status.fdvAtual} />
      <Pds pds={status.pds} />
      <Condições condições={status.condições} />
    </div>
  );
};

export default Status;
