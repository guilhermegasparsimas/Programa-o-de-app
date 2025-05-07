import React from 'react'
import {  useState, useEffect } from 'react'
import './Calculo.css'
import Move from './Move'

function Calculo() {
    const[inputValor, setInputValor] = useState('')
    const[saldo, setSaldo] = useState(0)
    const[inputNome, setInputNome] = useState('')
    const[nomeMovimentacao, setNomeMovimentacao] = useState([])


    useEffect(() => console.log(saldo), [saldo])

    useEffect(() => console.log(nomeMovimentacao), [nomeMovimentacao])

    function aumentarSaldo(){
        setSaldo(Number(inputValor) + Number(saldo))
        setInputValor('')
        
        let nome={
            id:Date.now(),
            movimentacao: inputNome,
            preco: Number(inputValor),
            tipo: '(Crédito)'
        }
        setNomeMovimentacao([nome, ...nomeMovimentacao])
        setInputNome('')
    }

    function diminuirSaldo(){
        setSaldo(Number(saldo) - Number(inputValor))
        setInputValor('')

        let nome={
            id:Date.now(),
            movimentacao: inputNome,
            preco: Number(inputValor),
            tipo: '(Débito)'
        }
        setNomeMovimentacao([nome, ...nomeMovimentacao])
        setInputNome('')
    }
  return (
    <div className='container-calculo'>
        <div className='conteudo'>
        <h1>iMesada</h1>
        <h2>Controlinho Financeiro</h2>
        <label >💰 Saldo: R${saldo.toFixed(2)} </label>
        
        <input className='inputs' placeholder='Nome da Movimentação' type="text" value={inputNome} onChange={(event) => setInputNome(event.target.value)} />
        <input className='inputs' placeholder='Valor' type="text" value={inputValor} onChange={(event) => setInputValor(event.target.value)}/>
        </div>
        <div className='bttn'>
            <button id='button-credit' onClick={aumentarSaldo}>Crédito</button>
            <button id='button-debit' onClick={diminuirSaldo}>Débito</button>
        </div>
        <div className='relatorio'>
            <h1>📋Kowalski, relatório🐧</h1>
        </div>
        <div className='cards'>
                {nomeMovimentacao.map((p) => (
                    <Move key={p.id} movimentacao={p.movimentacao} preco={p.preco} tipo={p.tipo} />
                ))}
            </div>
    </div>
  )
}

export default Calculo
