import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import WeatherIndications from './Components/WeatherIndications'

function App() {

  const [weather, setWeather] = useState()

  useEffect(() => {

    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a412f7fea75a8895bdd54aa467ebcae7`)
        .then(res => setWeather(res.data))
    }
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  console.log(weather);



  return (
    <div className="App">
      <h1>Weather App</h1>

      <h2> {weather?.name}, {weather?.sys.country}</h2>

      <WeatherIndications
        weather={weather}
        useState={useState}

      />
    </div>
  )
}

export default App
