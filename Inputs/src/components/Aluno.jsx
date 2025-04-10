import React, { useState } from 'react'
import './Aluno.css'

function Aluno() {
    const[notaA, setNotaA] = useState('')
    const[notaB, setNotaB] = useState('')
    const[notaReal, setNotaReal] = useState()

    function calcularNota(){     
        let media = (Number(notaA) + Number(notaB)) /2
      if(media >= 7){
        setNotaReal('APROVADO')
      }else if(media >= 4){
        setNotaReal('RECUPERAÇÂO')
      }else{
        setNotaReal('REPROVADO')
      }
      console.log(media)
    } 
  return (
    <div className='container-aluno'>

      <label>Aprovado ou Reprovado</label>
      <input type="text" value={notaA} onChange={(event) => setNotaA(event.target.value)}/>
      <input type="text" value={notaB} onChange={(event) => setNotaB(event.target.value)}/>
      
      <button onClick={calcularNota}>Aprovação</button>
      {notaReal}

    </div>
  )
}

export default Aluno
