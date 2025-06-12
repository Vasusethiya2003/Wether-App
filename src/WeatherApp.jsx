import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
          city:"Delhi",
            feelsLike:40.44,
            humidity:18,
            temp:41.22,
            tempMax:41.22,
            tempMin:41.22,
            weather:"clear sky",
    })
    function updateInfo(newInfo){
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1 style={{color:"white", fontFamily:"gilroy" ,fontSize:"50px"}}>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            &nbsp; &nbsp;
            <InfoBox info={weatherInfo}/>
        </div>
    )
}