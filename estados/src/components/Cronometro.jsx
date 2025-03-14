import './Cronometro.css'

function cronometro() {
  return (
<div className='container'>
    <div id="cronometro">00:00:00</div>
    <div id="botoes">
        <button id="botaoIniciarParar" onClick={iniciarParar()}>Iniciar</button>
        <button id="botaoResetar" onClick={resetar()}>Resetar</button>
    </div>
</div>
  )
}

export default cronometro
