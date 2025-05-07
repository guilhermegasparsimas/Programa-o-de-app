import React from 'react'
import {  useState, useEffect } from 'react'
import './Calculo.css'
import Move from './Move'

function Calculo() {
    const[inputValor, setInputValor] = useState('')
    const[saldo, setSaldo] = useState(0)
    
    const[nomeMovimentacao, setNomeMovimentacao] = useState([])

    useEffect(() => console.log(saldo), [saldo])

    useEffect(() => console.log(nomeMovimentacao), [nomeMovimentacao])

    function aumentarSaldo(){
        setSaldo(Number(inputValor) + Number(saldo))
        setInputValor('')
        
        let nome={
            id:Date.now(),
            movimentacao: nomeMovimentacao,
            preco: Number(inputValor),
            tipo: 'Crédito'
        }
        setNomeMovimentacao([nome, ...nomeMovimentacao])
    }

    function diminuirSaldo(){
        setSaldo(Number(saldo) - Number(inputValor))
        setInputValor('')
    }
  return (
    <div className='container-calculo'>
        <div className='conteudo'>

        <h1>iMesada</h1>
        <h2>Controlinho Financeiro</h2>
        <label >💰 Saldo: R${saldo.toFixed(2)} </label>
        
        <input placeholder='Nome da Movimentação' type="text" value={nomeMovimentacao} onChange={(event) => setNomeMovimentacao(event.target.value)} />
        <input placeholder='Valor' type="text" value={inputValor} onChange={(event) => setInputValor(event.target.value)}/>
        </div>
        <div className='bttn'>
            <button onClick={aumentarSaldo}>Crédito</button>
            <button onClick={diminuirSaldo}>Débito</button>
        </div>
        <div className='relatorio'>
            <h1>📋Kowalski, relatório🐧</h1>
            <div>
                {nomeMovimentacao.map((p) => (
                    <Move key={p.id} movimentacao={p.movimentacao} preco={p.preco} tipo={p.tipo} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Calculo
