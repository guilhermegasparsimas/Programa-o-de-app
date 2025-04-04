import { useState } from 'react'
import './App.css'

function App() {

  const[inputUsername, setInputUsername] = useState('')
  const[inputPassword, setInputPassword] = useState('')
  const[erro, setErro] = useState(false)
  
  function efetuarLogin(){
    if(inputUsername == 'GillBates' && inputPassword == 1235){
       setErro(false)
    }else{
      //  alert('Deu ruim')
      setErro(true)
    }

  }
  return (
 <div className='container-app'>

  <h1>Inputs controlados</h1>

  <label htmlFor="">Username</label>
  <input className='inputs' type="text" value={inputUsername} onChange={(event) => setInputUsername(event.target.value)}/>

  <label htmlFor="">Password</label>
  <input className='inputs' type="Password" value={inputPassword} onChange={(event) => setInputPassword(event.target.value)}/>
  
  {erro && 
  <span className='msg-erro'>*Credenciais inválidas</span>
}
  <button onClick={efetuarLogin} id='bttLogin'>Login</button>
 
      
 </div>
  )
}

export default App
