import {useState} from 'react'

function Estados() {

    const [usuario, setUsuario] = useState("Juca")
    const [nome, setNome] = useState("Ulib")
    const [senha, setSenha] = useState()
  
    function lerNome(){
      let nome = prompt("Digite o nome (vou ignorar):")
      setNome(nome)
    }
    function lerUsuario(){
      let resposta = prompt("Digite o novo usuário:")
      setUsuario(resposta)
  
      let pw = prompt("Digite a nova senha:")
      let pw2 = prompt("Confirme a senha:")
  
      if(pw == pw2){
        setSenha(pw)
      }else{
        alert("As senhas são diferentes")
      }
    }
  return (
    <div>

        <h1>ESTADOS</h1>

        Nome: {nome}

      <div></div>

        Usuário: {usuario} <br/>
        Senha: {senha}

      <div></div>

      <button onClick={lerNome}>Trocar nome</button>
      <button onClick={lerUsuario}>Trocar usuario</button>

    </div>
  )

}
export default Estados