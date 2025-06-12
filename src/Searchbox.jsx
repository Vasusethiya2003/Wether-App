import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="f0badd1a4426473dcc47c4845e7d0b06";
    let getweatherInfo=async()=>{
      try{
          let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse= await response.json();
       let result={
            city:jsonResponse.name,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
       };
       console.log(result);
       return result;
       }catch(err){
        throw err;
       }
    }
    function handleChange(evt){
        setCity(evt.target.value);
    };
    let handleSubmit=async(evt)=>{
          try{
              evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getweatherInfo();
            updateInfo(newInfo);
          }catch(err){
            setError(true);
          }
    };
    return(
        <div className='SearchBox'>
        <h3 style={{color:"white"}}>Search for the Weather</h3>
        <form action="" onSubmit={handleSubmit}>
            {/* <TextField style={{backgroundColor:"white", borderRadius:"10px", borderColor:"black"}} id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/> */}
            <TextField
  id="City"
  label="City Name"
  variant="outlined"
  required
  value={city}
  onChange={handleChange}
  sx={{
    backgroundColor: "white",
    borderRadius: "10px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "darkgreen",
        borderWidth:"4px",        // default border
      },
      "&:hover fieldset": {
        borderColor: "darkgreen",         // on hover
         borderWidth:"4px",  
      },
    },
    "& label.Mui-focused": {
      margin:"3px",
      color:"blue",
      fontWeight:"bold",
    },
  }}
/>
            <br />
            <br />
            
             <Button variant="contained" type="submit">
        Search
      </Button>
      {error &&<p style={{color:"red"}}>No such Place Exists</p>}
        </form>
        </div>
    );
}