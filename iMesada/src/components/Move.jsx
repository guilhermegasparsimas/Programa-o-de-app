import React from 'react'
import './Move.css'

function Move(props) {
  return (
    <div className='container-move'>
       <h3>{props.movimentacao}</h3>-
        <p>R${props.preco.toFixed(2).replace(".",",")}</p>
        {props.tipo}
    </div>
  )
}

export default Move
