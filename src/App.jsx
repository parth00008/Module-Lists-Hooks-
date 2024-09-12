import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './Comp'

function App() {
  const [link, setlink] = useState("")
  const[list,setlist]=useState([])
  const[ed,seted]=useState("false")
  const [userId,setUserId]=useState("");   


 function handleadd(){
  if (ed) {
    setlist((li)=>li.map((val,idx)=>(idx===userId?link:val)))
    seted(false)
    setUserId(null)
  } else {
    
    setlist((li)=>{
      // console.log(li);
      
       return [...li,link]
    })
  }

      setlink("")
 }
 function del(id){
      console.log("delete");
      setlist((st)=>{
          return st.filter((val,index)=>index!==id)
      })
 }   
 function edit(id){
  console.log("edit");
  seted(true)
  setUserId(id)
        
    const userToEdit=list.find((users)=>users.index===id);

        console.log(userToEdit);
        
        setlink(list[id])

         
 }

  return (
    <>
      <div className='container'>
       {console.log(list)}
        <h1>Grocery Shopping</h1>
        <input type="text"
        value={link}
        onChange={(e) => {
          setlink(e.target.value)
        }} />
        <button className='add' onClick={handleadd}>add</button>
       
          {
            list.map((val,index)=>{
              return <Comp list={val} key={index}  onSelect={()=>{del(index)}} edt={()=>{edit(index)}}/>
            })
          }
   
      </div>
    </>
  )
}

export default App
