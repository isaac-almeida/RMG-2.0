import "./barraMana.scss";
import { useState } from "react";

function BarraMana({ manaAtual, manaMax }: any) {
  const [mana, mudaMana] = useState(manaAtual);
  function clicaBarra() {
    if (mana < manaMax) {
      mudaMana(mana + 1);
    }
  }
  function clicaMana() {
    if (mana != manaMax) {
      mudaMana(mana - 2);
    } else {
      mudaMana(mana - 1);
    }
  }

  return (
    <div className="barraMana">
      <h4>MP: </h4>
      <div className="barra" onClick={clicaBarra}>
        <div
          className="mana"
          style={{ width: (mana * 240) / manaMax + "px" }}
          onClick={clicaMana}
        ></div>
      </div>
      <div className="qtde">
        {mana}/{manaMax}
      </div>
    </div>
  );
}

export default BarraMana;
