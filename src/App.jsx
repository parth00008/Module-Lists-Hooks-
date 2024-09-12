import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './Weather'

const App = ()=>{
      const[data,setdata] = useState("")   
      
      function handleapi(){
        fetch("https://jsonplaceholder.typicode.com/posts",{
          method:"GET"
        }).then((Response)=>{
          return Response.json();
        }).then((incomingdata)=>{
          setdata(incomingdata);
        }).then((err)=>{
          console.log(err);
        })
      }
 
  return(
    <div>
      {/* <h1>api</h1>
      <button onClick={handleapi}>Get data</button>
      <ul>
        {data && data.map((value,index)=>{
          return(
            <li key={index}>
              <p>{value.title}</p>
              <p>{value.body}</p>
            </li>
          )
        })}
      </ul> */}
      <Weather/>
    </div>
  )
}

export default App
