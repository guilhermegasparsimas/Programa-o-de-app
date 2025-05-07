import React from 'react'

function Move(props) {
  return (
    <div>
       <h2>{props.movimentacao}</h2>
        <p>R${props.preco.toFixed(2).replace(".",",")}</p>
        {props.tipo}
    </div>
  )
}

export default Move
