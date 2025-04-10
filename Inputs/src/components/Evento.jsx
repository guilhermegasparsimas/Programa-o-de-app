import { useState } from "react";
import '../components/Evento.css'

function Evento() {
    const[inputTeste,setInputTeste] = useState()

    function testar(event){
        console.log(event);
    }

    function mudouInput(){
        console.log(event);
        setInputTeste(event.target.value)
    }
  return (
    <div className="container-event">
        <h2>
            Evento
        </h2>
      <button onClick={(event) => testar(event)}>Testar</button>
      
      <input className="inputs" type="text" value={inputTeste} onChange={(event) => mudouInput(event)}/>
    </div>
  )
}

export default Evento
