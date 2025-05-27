import { useEffect, useState } from 'react'
import React from 'react';
import './App.css';

function App() {
  const [color, setColour] = useState('olive')
  useEffect(()=>{
    alert(`${color} is clicked`)
  },[color])
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  <h1 className="text-3xl font-bold mb-6">Color Changing box</h1>
  <div className="w-64 h-64 rounded-lg shadow-lg mb-6 transition-all duration-500 text-center flex text-teal-50 justify-center items-center" style={{ backgroundColor: color }}>
    {/* The color-changing box */}
    I am now {color}
  </div>
  <div className="flex flex-wrap gap-4">
    <button className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600" onClick={()=>setColour('red')}>Red</button>
    <button className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600" onClick={()=>setColour('green')}>Green</button>
    <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600" onClick={()=>setColour('blue')}>Blue</button>
    <button className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 " onClick={()=>setColour('yellow')}>Yellow</button>
    <button className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600" onClick={()=>setColour('purple')}>Purple</button>
  </div>
</div>

    </>
  )
}

export default App
