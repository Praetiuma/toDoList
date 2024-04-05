import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <h1 className="text-3xl font-bold text-red-500 underline text-center">Hello world!</h1>
    <>
    <div className='flex justify-around'>
      <div>
        <div></div>
        <div>SmartChain</div>
      </div>
      <div className='flex justify-around'>
        <div>About us</div>
        <div>Projects</div>
        <div>Contact us</div>
      </div>
    </div>
    <div>
      <input placeholder='Item_title'/>
      <input placeholder='Item_description'/>
      <input placeholder='Item_duration'/>
      <button name='Submit' title='Submit'/>
    </div>
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </>
  )
}

export default App
