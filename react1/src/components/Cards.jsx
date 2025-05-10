import React from 'react'

// const Cards=(props)=>{
//     console.log(props)
//     return (
//         <div className="text-black">This is a card {props.a}</div>
//     )
// }
const Cards=(props)=>{
    return (
        <div className='mr-7 bg-blue text-white inline-block p-6 text-center rounded'>
            <img className='ml-8 h-32 w-32 rounded-full mb-3' src={props.photo}></img>
            <h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
            <h4 className='text-purple-400 '>{props.prof}</h4>
              <h2 >{props.city},{props.age}</h2>
            <button className='ml-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
        </div>
    )
}
export default Cards