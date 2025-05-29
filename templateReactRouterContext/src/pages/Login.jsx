import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'

function Login() {
    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const{usuarios, setUsuarioLogado} = useContext(GlobalContext)
    const navigate = useNavigate()

    function fazerLogin(){
        const usuario = usuarios.find((u) => u.username == inputUsername && u.password == inputPassword)
         if(usuario){
            alert('Login efetuado com sucesso')
            setUsuarioLogado(usuario)
            navigate('/home')
        } else {
            alert('Credenciais incorretas!')
        }
    }
  return (
    <div className='container-login'>
        
        <div>
            <h1>Page Login</h1>
            Username <input type='text' value={inputUsername} onChange={(e) => setInputUsername(e.target.value)}/>
        </div>
        <div>
        Password <input type='text' value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}/>
        </div>
        <div>
            <button onClick={fazerLogin}>Fazer Login</button>
        </div>
    </div>
  )
}

export default Login
