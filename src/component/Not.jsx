import React from 'react'
import { useNavigate } from 'react-router-dom'



function Not() {
    const navigate = useNavigate()
    
    function handlesign(){
        navigate('/')
    }
    return (
        <div>
            <p>Error</p>
            <button onClick={handlesign}>Signup</button>
        </div>
    )
}

export default Not
