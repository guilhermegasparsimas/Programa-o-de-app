import './Body.css'
import Sorteio from './Sorteio'

function Body() {
  return (
    <div className='container-body'>
      <h2>Venha para a inauguração da farmárcia</h2>

      <p>
        ua farmárcia querida está sob nova direção.
        Venha para a festa de lançamento no dia dd/mm/aaaa!
      </p>

      <Sorteio />
    </div>
  )
}

export default Body
