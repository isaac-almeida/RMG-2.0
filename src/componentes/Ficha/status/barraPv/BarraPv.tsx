import "./barraPv.scss" 
import Ponto from "./ponto/Ponto"

const BarraPv = ({pvAtual}) => {
  const barrinhas = []
  let i = 0
  pvAtual.split("").forEach(valor => {
    barrinhas.push(<li key={i}><Ponto tipo={valor}/></li>)
    i = i + 1
  })
  return (
    <div className="barraPv">
      <h3>HP: </h3> 
      <div className="barraPvInteira"><ul>{barrinhas}</ul></div>
    </div>
  )
}

export default BarraPv