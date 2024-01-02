import React from 'react'
import { useState } from 'react';

const Header = () => {
  const [color, setColor] = useState("yellow")

  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <div className='bg-gray-200 p-2 text-white flex flex-wrap justify-evenly'>
          <button className='bg-white text-black p-2 rounded-3xl' onClick={() => { setColor("white") }}>White</button>
          <button className='bg-red-600 text-black p-2 rounded-3xl' onClick={() => { setColor("red") }}>Red</button>
          <button className='bg-green-800 text-black p-2 rounded-3xl' onClick={() => { setColor("green") }}>Green</button>
          <button className='bg-blue-400 text-black p-2 rounded-3xl' onClick={() => { setColor("blue") }}>Blue</button>
          <button className='bg-yellow-300 text-black p-2 rounded-3xl' onClick={() => { setColor("yellow") }}>Yellow</button>
          <button className='bg-orange-600 text-black p-2 rounded-3xl' onClick={() => { setColor("orange") }}>Orange</button>
          <button className='bg-pink-400 text-black p-2 rounded-3xl' onClick={() => { setColor("pink") }}>Pink</button>
        </div>
      </div>

    </>
  )
}

export default Header;