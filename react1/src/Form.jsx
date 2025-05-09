import { useState } from 'react'
import React from 'react'

const Form=()=>{

    const [username,setUsername]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault(e)
        console.log(username)
        setUsername('')
    }
    return (
        <div>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <input value={username} onChange={(e)=>{setUsername(e.target.value)}}className='px-4 py-3 color-black' type="text" placeholder="enter your text" ></input>
                <button className='px-4 text-black py-3 text-xl bg-emerald-600 rounded'>submit</button>
            </form>
        </div>
    )
}


export default Form;