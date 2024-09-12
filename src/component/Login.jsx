import React, { useEffect, useState } from 'react';
import './Login_Signup.css'
import { useNavigate } from 'react-router-dom';


function Login() {
    const [send, setSend] = useState({
        email: "",
        password: "",
    });
    const [incomingData, setIncomingData] = useState([]);
    const navigate = useNavigate()

  

    useEffect(()=>{
        handleLogin();
    },[]);
    async function handleLogin() {
        try {
            const response = await fetch("https://667d05ea3c30891b865e8676.mockapi.io/api/v1/users", {
                method: "GET",
            });
            const serverResponse = await response.json();
            setIncomingData(serverResponse);
        } catch (error) {
            console.log(error);
        }
        // const parth = incomingData.find((incomingData)=>
    
        //     incomingData.email && incomingData.password
            
        // )
        // if(parth){
        //     console.log("success")
        // }
        // else{
        //     console.log("wrong");
        // }
    }
    
    function handleclick(e){
        const parth = incomingData.find((user)=>user.email===send.email && user.password===send.password);
        console.log(parth);

        if (parth) {
            navigate('/home')
        } else {
            navigate('/not')
        } 
    }
    return (
        <div className='login'>
            <h1>LOGIN TO MY ACCOUNT</h1>
            <label htmlFor="enter email">enter email</label>
            <br />
            <input
                type="text"
                placeholder='enter email'
                value={send.email}
                onChange={(e) => setSend({ ...send, email: e.target.value })}
            />
            <br />
            <label htmlFor="enter password">enter password</label>
           <br />   
            <input   
                type="password"
                placeholder='enter password'
                value={send.password}
                onChange={(e) => setSend({ ...send, password: e.target.value })}
            />
            <br />
                <button onClick={(e)=>{handleclick(e)}}>Login</button>
            {/* <div>
                {incomingData.map((user) => (
                    <div key={user.id}>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                        <br />
                    </div>
                ))}
            </div> */}
            {/* {incomingData && <p>{incomingData}</p>} */}

        </div>
    );
}

export default Login;
