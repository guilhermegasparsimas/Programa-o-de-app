import React, { useState } from 'react'
import './Conversao2.css'

function Conversao2() {

    const [kilometragem, setKilometragem] = useState(0)
    const[milha, setMilha] = useState(0)
    const [legua, setLegua] = useState(0)

  function converterKmParaMilhas(){
    let distancia = Number(prompt("Informe o Km"))
    setMilha((distancia * 0.621371).toFixed(2))
    setLegua((distancia * 0.207124).toFixed(2))
    setKilometragem(distancia)
}

  return (
    <div className='container-conversao2'>
        <h2>km ➡️ milhas ➡️ léguas</h2>
        <button onClick={converterKmParaMilhas}>Converter</button>
        <p>
            Distância Km: {kilometragem}
        </p>
        <p>
            Distância Mh: {milha}
        </p>
        <p>
            Distância Léguas: {legua}
        </p>

    </div>
  )
}

export default Conversao2