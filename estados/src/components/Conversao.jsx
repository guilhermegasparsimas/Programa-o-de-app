import React, { useState } from 'react'
import './Conversao.css'

function Conversao() {

  const [real, setReal] = useState (0)
  const [dolar, setDolar] = useState (0)

  function converterRealPraDolar(){
    let entrada = Number(prompt("R$: "))
    setDolar((entrada * 5.81).toFixed(2))
    setReal(entrada)
  }

  return (
    <div className="container-conversao">
      <h2>Real ➡️ Dolar</h2>
      <button onClick={converterRealPraDolar}>Converter</button>

      <p>
        Valor Real: R${real}
      </p>
      <p>
        Valor Dolar: U${dolar}
      </p>

    </div>
   
  )
}

export default Conversao