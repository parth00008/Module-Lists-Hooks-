import { useState } from "react";

const Weather = ()=>{
  const[data,setdata] = useState("")

  function wethr(){
      fetch("https://freetestapi.com/api/v1/weathers?sort=name&order=dec",{
        method: "GET"
      }).then((Response)=>{
          console.log(Response);
          return(Response.json())
      }).then((incomingdata)=>{
         setdata(incomingdata);
      }).then((err)=>{
        console.log(err);
      })
  }

   return(
    <div className="main">
 
        <h1>fetch weather api data</h1>
        <button onClick={wethr}>see weather</button>
        <ul>
            {data && data.map((value,index)=>{
                return(
                    <li key={index}>
                        <p>id :- {value.id}</p>
                        <p>city :- {value.city}</p>
                        <p>temperature :- {value.temperature}</p>
                        <p>description :- {value.weather_description}</p>
                        </li>
                )
            })}
        </ul>
    </div>
   )   
}

export default Weather;