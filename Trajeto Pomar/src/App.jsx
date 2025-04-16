import { useState } from 'react'
import './App.css'

function App() {
  const[maca, setMaca] = useState('')
  const[totalMaca, setTotalMaca] = useState(0)
  const[laranja, setLaranja] = useState('')
  const[totalLaranja, setTotalLaranja] = useState(0)
  const[bergamota, setBergamota] = useState('')
  const[totalBergamota, setTotalBergamota] = useState(0)
  const[banana, setBanana] = useState('')
  const[totalBanana, setTotalBanana] = useState(0)
  const[pera, setPera] = useState('')
  const[totalPera, setTotalPera] = useState(0)
  const[total, setTotal] = useState('0')

  function calcularPrecoFrutas(){
    setTotal(Number(maca * 1.50)  + Number(laranja * 2.00) + Number(bergamota * 1.00) + Number(banana * 1.20) + Number(pera * 0.5))
    setTotalMaca(Number(maca))
    setTotalLaranja(Number(laranja))
    setTotalBergamota(Number(bergamota))
    setTotalBanana(Number(banana))
    setTotalPera(Number(pera))
  }
  function limparFrutas(){
    setMaca('')
    setLaranja('')
    setBergamota('')
    setBanana('')
    setPera('')
    setTotal('0')
    setTotalMaca(0)
    setTotalLaranja(0)
    setTotalBanana(0)
    setTotalBergamota(0)
    setTotalPera(0)
  }
  return (
<div className='container-trajeto-pomar'>

  <div>
    <h1>TRAJETO POMAR 🍇🍉</h1>
  </div>

  <div className='container-inputs'>

    <div className='nome-frutas'>
    <label>Maçã R$1,50 🍎</label>
    <label>Laranja R$2,00 🍊</label>
    <label>Bergamota R$1,00 🍊</label>
    <label>Banana R$1,20🍌</label>
    <label>Pera R$0,50🍐</label>
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
    
    <div className='qtd-frutas'>
    {totalMaca >0 && <label>Maçãs x {maca}</label> }
    {totalLaranja >0 && <label>Laranjas x {laranja}</label>}
    {totalBergamota >0 && <label>Bergamotas x {bergamota}</label>}
    {totalBanana >0 && <label>Bananas x  {banana}</label>}
     {totalPera >0 && <label>Peras x  {pera}</label>}
    </div>

   
    <label id='text-valor-total'>Total a pagar = {total}R$</label>
    </div>

   </div>

</div>
  )
}

export default App
