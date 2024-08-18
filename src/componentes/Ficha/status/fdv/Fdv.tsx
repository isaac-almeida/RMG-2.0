import "./fdv.scss"

const Fdv = ({fdvMax, fdvAtual}) => {
  function mudaBotao (evento) {
    evento.target.style.opacity = -evento.target.style.opacity;
    fdvAtual += parseInt(evento.target.style.opacity);
    console.log(fdvAtual)
  }
  
  const pontos = []
  for(let i = 0; i < fdvMax; i++) {
    pontos.push(
      <li key={i}>
        <img src="./xis.svg" style={{opacity: i >= fdvAtual ? -1 : 1}} onClick={(evento) => {mudaBotao(evento)}}/>
      </li>
    )
  }

  return (
    <div className='fdv'>
        <h4>FdV:</h4>
        <ul>
          {pontos}
        </ul>
    </div>
  )
}

export default Fdv