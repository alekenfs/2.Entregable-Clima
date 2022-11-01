import React from 'react';
import Buttom from './Buttom';

const WeatherIndications = ({ weather, useState }) => {

    const [isF, SetIsF] = useState(true)
    let tempF = (weather?.main.feels_like - 273.15) * 9 / 5 + 32
    let tempC = (tempF - 32) * 5 / 9


    return (
        <>
            <div className='main-container'>
                <section className='icon-container'>
                    <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="weather Icon" className='weather-Icon' />
                    <h3>{isF ? tempF.toFixed(2) : tempC.toFixed(2)} {isF ? "Fº" : "Cº"} </h3>

                </section>
                <section className='indicators-container'>

                    <h3> Wind Speed: {weather?.wind.speed} m/s</h3>
                    <h3> Clouds: {weather?.clouds.all}% </h3>
                    <h3> Pressure: {weather?.main.pressure}mb</h3>


                </section>
            </div>



            <Buttom
                SetIsF={SetIsF}
                weather={weather}
                tempF={tempF}
                isF={isF}
            />
        </>
    );
};

export default WeatherIndications;