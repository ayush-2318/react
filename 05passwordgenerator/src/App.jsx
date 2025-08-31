import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState('');

  const passwordRef=useRef(null)

  const generatePassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()"
    for(let i=1;i<length;i++){
     const char= Math.floor(Math.random()*str.length+1);
     pass+=str.charAt(char)
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard=()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
  }

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed])
  return (
    <>
    <div className="w-full min-h-screen bg-gray-800 px-4 py-6">
  
      <h1 className="text-white text-center text-2xl font-bold mb-4">
      Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden max-w-xl mx-auto">
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          className="w-full py-2 px-3 outline-none bg-white text-black"
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="bg-blue-600 text-white px-4 py-2 shrink-0 hover:!bg-blue-700">
          Copy
        </button>
  </div>
  <div className='flex justify-center items-center gap-x-6 mt-4'>
    <div className='flex items-center gap-x-1'>
      <input type='range' min={6} max={20} name='' id='' value={length} 
      className='cursor-pointer' onChange={(e)=>setLength(e.target.value)}/>
      <label htmlFor='length' className="text-white">Length:{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
     <input type='checkbox' defaultChecked={numberAllowed} onChange={()=>{
      setNumberAllowed((prev)=>!prev)
     }}></input>
     <label htmlFor='number' className='text-white'>Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
     <input type='checkbox' defaultChecked={charAllowed} onChange={()=>{
      setNumberAllowed((prev)=>!prev)
     }}></input>
     <label htmlFor='charInput' className='text-white'>Character</label>
    </div>
  </div>
  
</div>




      
    </>
  )
}

export default App
