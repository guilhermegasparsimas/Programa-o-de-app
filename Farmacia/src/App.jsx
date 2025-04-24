import { useState } from 'react'
import './App.css'


function App() {

return (

<div className="container-farmacia">

  <div className="navbar">

    <img id='logo' src="/img/farmarcia-logo-pq.PNG.png" alt="" />
    <h2>Promoções</h2>
    <h2>Camisetas</h2>
    <h2>Sobre</h2>

  </div>

<div className="todos">

  <div className="body">

    <div className="left">

     

        <div className='text'>

      <h3>Agora sob nova direção</h3>
      <h6>Enquanto renovava a farmácia, Márcia também decidiu investir em tecnologia para impulsionar o negócio.
         Ela implementou um sistema de gerenciamento de estoque automatizado e lançou um programa de fidelidade digital para os clientes,
          proporcionando uma experiência de compra mais conveniente e personalizada.</h6>
        </div>

    </div>
    <div className="right">

    <div className='image-comp'>
          <img id='img-completo' src="/img/farmarcia.PNG.png" alt="" />
        </div>

      <h4></h4>

    </div>

</div>

    <div className="baixo">
      OI
    </div>
  
  </div>

</div>
)

}

export default App
