import "./pds.scss"
import { useState } from "react";

const Pds = ({pds}) => {
  const [ pontos, alteraPontos] = useState(pds)
  function aumenta () {
    alteraPontos(a => a+0.2)
    pds = pontos
  }
  function diminui () {
    alteraPontos(a => a-1)
    pds = pontos
  }


  return (
    <div className="pds">
        <h4>PdS: </h4>
        <div className="container">
          <span>{pontos.toFixed(1)}</span>
        </div>
        <button onClick={aumenta}><a className="mais">+</a></button>
        <button onClick={diminui}><a className="menos">-</a></button>
    </div>
  )
}

export default Pds