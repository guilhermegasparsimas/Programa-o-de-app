import React, { useState } from 'react'
import './Calculadeira.css'

function calculadeira() {
    const[number1, setNumber1] = useState('')
    const[number2, setNumber2] = useState('')
    const[resultadoFinal, setResultadoFinal] = useState('')
 
    function tratarN2(event){
        setNumber2(event.target.value)
    }
    function soma(){
       
        setResultadoFinal((Number(number1) + Number(number2)))
    }
    function subtracao(){
     
        setResultadoFinal((Number(number1 - number2)))
    }
    function multiplicacao(){
       
        setResultadoFinal((Number(number1 * number2)))
    }
    function divisao(){
       
        setResultadoFinal((Number(number1 / number2)))
    }
    
  return (
    <div className='container-calculadeira'>

       <div><label id='text-calculadeira'>Calculadeira</label></div>

      <input type="text" value={number1} onChange={(event)=> setNumber1(event.target.value)}/>
        👽
      <input type="text" value={number2} onChange={tratarN2}/>

      <div> 
        <button className='buttons' onClick={soma} >+</button>
        <button className='buttons' onClick={subtracao}>-</button>
        <button className='buttons' onClick={multiplicacao}>*</button>
        <button className='buttons' onClick={divisao}>/</button>
      </div>

      <div className='resultado'>
        {resultadoFinal}
      </div>
    </div>
  )
}

export default calculadeira
