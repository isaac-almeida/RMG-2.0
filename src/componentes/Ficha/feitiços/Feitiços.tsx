import "../../../estilos/Feitiços.scss";
import { useState } from "react";

const Feitiços = () => {
  let número = 2;
  const troço = useState(0);
  const display = troço[0];
  const função = () => {
    número += 1;
    troço[1](número);
  };
  return (
    <div>
      <p onClick={função}>Número: {display}</p>
    </div>
  );
};

export default Feitiços;
