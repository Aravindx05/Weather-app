import SearchBox from './searchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'



export default function WeatherApp(){
    
     let [weatherInfo,setweatherInfo]=useState({
        feelslike:24.04,
        city:"Hyderbad",
        temp:23.23,
        tempMin:23.23,
        tempMax:23.23,
        humidity:93,
        weather:"overcast",
     })
    

     let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
     }
    
    return(
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>

    )
}