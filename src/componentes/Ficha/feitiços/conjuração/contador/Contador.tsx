import './contador.scss'

const Contador = ({nome, função, cap=99, bottom=0, clica=false}) => {
  function aumenta () {
    if (função.valor < cap) {
      função.aumenta()
    }
  }
  function diminui () {
    if (função.valor > bottom) {
      função.diminui()
    }
  }

  let título = <h4>{nome}: </h4>
  if (clica) {
    título = <h4 onClick={() => {
      if (clica.status) {
        clica.retrocede()
      }
      else {
        clica.avança()
      }
    }} style={{
      cursor: "pointer",
      opacity: 0.8 + 0.5*(clica.status ? 1 : 0),
      textShadow: clica.status ? "#ff0000 3px 0 8px" : "none",
    }}>{nome}: </h4>
  }


  return (
    <div className="contador">
        {título}
        <div className="container">
          <span onClick={aumenta}>{função.valor.toFixed(0)}</span>
        </div>
        <button className='baixo' onClick={diminui}><a className="menos">-</a></button>
    </div>
  )
}


export default Contador