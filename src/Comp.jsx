import React from 'react'
import './App.css'


const Comp = (props) => {
    return (
        <div>
            <li>{props.list}</li>
            <button className='delete' onClick={props.onSelect}>delete</button>
            <button className='edit' type='button' onClick={props.edt}>edit</button>
        </div>
    )
}

export default Comp
