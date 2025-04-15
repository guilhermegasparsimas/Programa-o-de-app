import { useState } from 'react'
import './App.css'

function App() {
  const[maca, setMaca] = useState('')
  const[laranja, setLaranja] = useState('')
  const[bergamota, setBergamota] = useState('')
  const[banana, setBanana] = useState('')
  const[pera, setPera] = useState('')
  const[total, setTotal] = useState('0')

  function calcularPrecoFrutas(){
    setTotal(Number(maca * 1.50)  + Number(laranja * 2.00) + Number(bergamota * 1.00) + Number(banana * 1.20) + Number(pera * 0.5))

  }
  function limparFrutas(){
    setMaca('')
    setLaranja('')
    setBergamota('')
    setBanana('')
    setPera('')
    setTotal('0')
  }
  return (
<div className='container-trajeto-pomar'>

  <div>
    <h1>TRAJETO POMAR 🍇🍉</h1>
  </div>

  <div className='container-inputs'>

    <div className='nome-frutas'>
    <label>Maçãs 🍎</label>
    <label>Laranjas 🍊</label>
    <label>Bergamotas 🍊</label>
    <label>Bananas 🍌</label>
    <label>Peras 🍐</label>
    </div>
   
    <div className='inputs-frutas'>
    <input type="text" value={maca} onChange={(event) => setMaca(event.target.value)} placeholder='Maçãs'/> <p></p>
    <input type="text" value={laranja} onChange={(event) => setLaranja(event.target.value)} placeholder='Laranjas'/> <p></p>
    <input type="text" value={bergamota} onChange={(event) => setBergamota(event.target.value)} placeholder='Bergamotas'/> <p></p>
    <input type="text" value={banana} onChange={(event) => setBanana(event.target.value)} placeholder='Bananas'/> <p></p>
    <input type="text" value={pera} onChange={(event) => setPera(event.target.value)} placeholder='Peras'/> <p></p>  
    </div>

  </div>

   <div className='container-valor-total'>

    <div className='div-buttons'>
    <button className='buttons' onClick={calcularPrecoFrutas}>Calcular</button>
    <button className='buttons' onClick={limparFrutas}>Limpar</button>
    </div>

    <div className='div-total'>

    <label id='text-qtd-frutas'>Quantidade de Frutas Colhidas</label>
    <label>Maçãs = {maca}</label>
    <label>Laranjas = {laranja}</label> 
    <label>Bergamotas = {bergamota}</label> 
    <label>Bananas =  {banana}</label>
    <label>Peras = {pera}</label>
    <label id='text-valor-total'>Total a pagar = {total}R$</label>
    </div>
   </div>

</div>
  )
}

export default App
