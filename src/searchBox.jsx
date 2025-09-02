import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city,setcity]=useState("");
    let[error,seterror]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="563e0c95bf3bef8a5b7c6bada4d41a43";

    let getWeatherInfo=async()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
      let result = {
  city: city,
  feelslike: jsonResponse.main.feels_like,
  temp: jsonResponse.main.temp,
  tempMin: jsonResponse.main.temp_min,
  tempMax: jsonResponse.main.temp_max,
  humidity: jsonResponse.main.humidity,
  weather: jsonResponse.weather[0].description,
};

        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
    };



    let handlechange=(evt)=>{
        setcity(evt.target.value);
    };

    let handleSubmit=async(evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setcity("");
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
    }catch(err){
        seterror(true);
    }
}

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handlechange} required />
                 <br></br>
                 <br></br>
                  <Button variant="contained" type="submit"> Send</Button>
                  {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    )
}