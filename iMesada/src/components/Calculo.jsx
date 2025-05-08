import React from 'react'
import {  useState, useEffect } from 'react'
import Move from './Move'
import './Calculo.css'

function Calculo() {
    const[inputValor, setInputValor] = useState('')
    const[saldo, setSaldo] = useState(0)
    const[inputNome, setInputNome] = useState('')
    const[nomeMovimentacao, setNomeMovimentacao] = useState([])


    useEffect(() => console.log(saldo), [saldo])

    useEffect(() => console.log(nomeMovimentacao), [nomeMovimentacao])

    function aumentarSaldo(){
        if(inputValor >0 && inputNome != ''){

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
        }else{
            alert('Por favor, insira os dados corretamente!')
        }
    }

    function diminuirSaldo(){
        if(inputValor >0 && inputNome != ''){

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
        }else{
            alert('Por favor, insira os dados corretamente!')
        }
    }
  return (
    <div className='container-calculo'>
        <div className='conteudo'>
        <h1>iMesada</h1>
        <h3>Controlinho Financeiro</h3>
        <h3>💰 Saldo: R${saldo.toFixed(2).replace(".",",")} </h3>
        
        <input className='inputs' placeholder='Nome da Movimentação' type="text" value={inputNome} onChange={(event) => setInputNome(event.target.value)} />
        <input className='inputs' placeholder='Valor' type="text" value={inputValor} onChange={(event) => setInputValor(event.target.value)}/>
        </div>
        <div className='bttn'>
            <button id='button-credit' onClick={aumentarSaldo}>Crédito</button>
            <button id='button-debit' onClick={diminuirSaldo}>Débito</button>
        </div>
        <div className='relatorio'>
            <h2>📋Kowalski, relatório🐧</h2>
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
