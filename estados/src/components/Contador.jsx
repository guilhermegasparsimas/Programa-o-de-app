import React from 'react'

function Contador() {
    const [palavras, setPalavras] = useState()
    const [caracteres, setCaracteres] = useState()

function contadorPalavras(){
    let entrada = prompt("Digite seu texto aqui:)")
    setCaracteres(entrada.split('')
)

}
  return (
    <div className='container-contador'>
        <h2>Contador de Palavras</h2>
        <p>caracteres {caracteres}</p>

    </div>
  )
}

export default Contador