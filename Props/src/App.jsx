import { useEffect, useState } from 'react'
import './App.css'
import Produto from './components/Produto'

function App() {
  const[inputModelo, setInputModelo] = useState("")
  const[inputPreco, setInputPreco] = useState("")
  const[inputDescricao, setInputDescricao] = useState("")

  const[produtos, setProdutos] = useState([ 
  // {id:Date.now(), modelo: "Melancia",preco: 22},
  // {id:Date.now()+1, modelo: "Pneu",preco: 300},
  // {id:Date.now()+2, modelo: "Garrafa",preco: 2},
  // {id:Date.now()+3, modelo: "Notebook", preco: 6000},
  // {id:Date.now()+4, modelo: "Desktop", preco: 600},
])

  useEffect(() =>
    console.log(produtos)
    ,[produtos]
  )

  function testar(){
    // console.log(produtos);
    let produto ={
      id:Date.now(), modelo: "Produto X", preco:10
    }
    
    setProdutos([produto, ...produtos])
    
  }

  function cadastrar(){
    let produto={
    id:Date.now(),
    modelo: inputModelo,
    preco:Number(inputPreco),
    descricao: inputDescricao
    }
    setProdutos([produto, ...produtos])
  }

  "1- interface intuitiva e simples" "Comunicação alternativa" "Personalização individual" "Rotinas e estruturas"
  
  return (
    <div className='container-app'>

      <div className='Form-produto'>
        <label>Modelo</label>
        <input type="text" value={inputModelo} onChange={(event) => setInputModelo(event.target.value)} />
        <label htmlFor="">Preco</label>
        <input type="number" value={inputPreco} onChange={(event) => setInputPreco(event.target.value)} />
        <label htmlFor="">Descrição</label>
        <input type="text" value={inputDescricao} onChange={(event) => setInputDescricao(event.target.value)} />
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      {/* <Produto modelo={`Galaxy A15`} preco={809} />
      <Produto modelo={`Smart TV 32" Full HD LED TCL`} preco={5000} />
      <Produto modelo={produtos[0].modelo} preco={produtos[0].preco} />
      <Produto modelo={produtos[1].modelo} preco={produtos[1].preco} />
      <Produto modelo={produtos[2].modelo} preco={produtos[2].preco} /> */}
<div>

      <button id='bttn-testar' onClick={testar}>TESTAR</button>
</div>

      {/* {produtos.map((p, index) => (
        <Produto key={index} modelo={p.modelo} preco={p.preco}/>
      ))} */}

  <div className="cards">

      {produtos.map((p) => (
        <Produto key={p.id} modelo={p.modelo} preco={p.preco} descricao={p.descricao} />
      ))}
  </div>

    </div>
  )
}

export default App
