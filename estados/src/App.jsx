import { useState } from 'react'
import './App.css'

function App() {

  const [usuario, setUsuario] = useState("Juca")
  const [nome, setNome] = useState("Ulib")

  function lerNome(){
    let nome = prompt("Digite o nome (vou ignorar):")
    setNome(nome)
  }
  function lerUsuario(){
    let resposta = prompt("Digite o novo usuário:")
    setUsuario(resposta)
  }

  return (
    <>
      <h1>ESTADOS</h1>
        Nome: {nome}
      <div></div>
        Usuário: {usuario}
      <div></div>
      <button onClick={lerNome}>Trocar nome</button>
      <button onClick={lerUsuario}>Trocar usuario</button>
    </>
  )
}

export default App
