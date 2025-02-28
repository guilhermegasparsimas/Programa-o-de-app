import { useState } from 'react'

function Aviso() {
    const [avisar, setAvisar] = useState(false)
    

    function toggleAviso(){
        setAvisar(avisar)
        console.log(avisar);

    }

  return (
    <div>
        {avisar}

        <button onClick={toggleAviso}>Aviso</button>
        <p>
        Celulares e jogos são proibidos no laboratório. Cada vez que 
        alguém fizer isso a equipe perde um ponto na sprint corrente da SA.

        </p>

    </div>
  )
}

export default Aviso