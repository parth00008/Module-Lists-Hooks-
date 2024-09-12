import React from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {
    const navigate = useNavigate()

    function login(){
     if (login) {
        navigate("/Login")
     }
    }
    function register(){
     if (register) {
        navigate("/Register")
     }
    }
    return (
        <div>
            <b>Model Login Form</b>
            <br />
            <button onClick={login}>Open model</button>
            <br />
            <b>Model Registration  Form</b>
            <br />
            <button onClick={register}>Open model</button>
        </div>
    )
}

export default Main
