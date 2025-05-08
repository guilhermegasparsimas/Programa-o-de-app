import React from 'react'
import './Move.css'

function Move(props) {
  return (
    // <div className='container-move'>
      <div className='container-move'>

    <div className={props.tipo}>
       <h4>{props.movimentacao}</h4>-
        <p>R${props.preco.toFixed(2).replace(".",",")}</p>
        ({props.tipo})
    </div>
      </div>

  )
}

export default Move
