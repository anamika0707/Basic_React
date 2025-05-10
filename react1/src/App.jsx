import { useState, useSyncExternalStore } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Cards from './components/Cards'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <h3>number is {count}</h3>
//       <button onClick={()=>setCount(count+1)}>increment</button>
//       <button onClick={()=>setCount(count-1)}>Decrement</button>
//     </div>
//       )
// }

// const App=()=>{
//   return (
//     <div>
//       <h2 className="text-xl">Hello</h2>
//       <h3>hello</h3>
//     </div>
//   )
// }

const App=()=>{
  
  const users=[
  {
    "name": "Aarav Mehta",
    "age": 28,
    "city": "Mumbai",
    "profession": "Software Engineer",
    "photo": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "name": "Neha Sharma",
    "age": 25,
    "city": "Delhi",
    "profession": "Graphic Designer",
    "photo": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "name": "Kabir Singh",
    "age": 32,
    "city": "Bangalore",
    "profession": "Data Analyst",
    "photo": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "name": "Priya Nair",
    "age": 29,
    "city": "Chennai",
    "profession": "Marketing Manager",
    "photo": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "name": "Rohan Das",
    "age": 27,
    "city": "Kolkata",
    "profession": "UX Designer",
    "photo": "https://randomuser.me/api/portraits/men/5.jpg"
  }
]

  return (
    <div>
      <div className='p-10'>
        {users.map(function(elem,idx){
          return <Cards key={idx} username={elem.name} age={elem.age} prof={elem.profession} city={elem.city} photu={elem.photo}/>
        })}
      </div>
    </div>
  )
}

export default App
