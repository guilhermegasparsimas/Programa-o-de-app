import React, { useState } from 'react'
import './Temperatura.css'

function Temperatura() {

    const [celsius, setCelsius] = useState(0)
    const [fahrenheit, setFahrenheit] = useState(0)
    const [kelvin, setKelvin] = useState(0)
    
function converterTemperatura(){
        let entrada = Number(prompt("Vamos converter a temperatura!"))
        setFahrenheit((entrada * 9/5) + 32)
        setKelvin(entrada + 273.15)
        setCelsius(entrada)

}
return (
    <div className='container-temperatura'>
        <h2>Grau ➡️ Celsius ➡️ Fahrenheit</h2>
        <button onClick={converterTemperatura}>Temperatura</button>
        <p>
            Celsius: {celsius}°C
        </p>
        <p>
            Fahrenheit: {fahrenheit}°F
        </p>
        <p>
            Kelvin: {kelvin} Kelvin
        </p>

    </div>
)
}

export default Temperatura