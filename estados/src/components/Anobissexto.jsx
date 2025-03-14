import { useState } from 'react'
import './Anobissexto.css'
function Anobissexto() {
    const[resultado, setResultado] = useState('Resultado não calculado') 

    function lerAno(){
        let ano = Number(prompt("Digite o ano: "))
        if(ano % 4 == 0){
            setResultado("é Bissexto")
        }else{
            setResultado("Não é Bissexto")
        }
        
    }
  return (
    <div className='container-anoBissexto'>
    <h2>AnoBissexto</h2>
    <button onClick={lerAno} className='lerAno'>Informar Ano</button>
    <h1>{resultado}</h1>
    </div>


  )
}

export default Anobissexto
