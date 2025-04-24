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
    <img id='logo' src="/img/farmarcia-logo-pq.PNG.png" alt="" />
  

  </div>

<div className="todos">

  <div className="body">

    <div className="left">

     
      <div>
        <img src="/img/farmarcia-cartoes.PNG.png" alt="" />
      </div>
        <div className='text'>

      <h3>Agora sob nova direção</h3>
      <h6>Enquanto renovava a farmácia, Márcia também decidiu investir em tecnologia para impulsionar o negócio. Ela implementou um sistema de gerenciamento de estoque automatizado e lançou um programa de fidelidade digital para os clientes, proporcionando uma experiência de compra mais conveniente e personalizada.</h6>
        </div>


    </div>
    <div className="right">

        <div>
          <h1>VENHA PARA A INAUGURAÇÂO NO DIA 27-07</h1>
        </div>
        <div> <h6>Todos que se registrarem e confirmarem sua presença em nossa inauguração,
          através do site, no dia, ganharão
          uma camiseta como forma de agradecimento por sua presença. Garanta já a sua, e faça parte
          do início de uma nova era, venha conhecer a <label id='far-ver'>FARMÁRCIA</label></h6>
        </div>

        <div>
          <img src="/img/farmarcia-camisetas.PNG.png" alt="" />
        </div>

    <div className='image-comp'>
          <button id='button'>GARANTA JÁ A SUA</button>
        </div>

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
