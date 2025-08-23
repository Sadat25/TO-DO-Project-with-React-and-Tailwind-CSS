import React from 'react'
import Input from './Component/Input'
import { FaTasks } from "react-icons/fa";


const App = () => {
  return (
    <div className='h-screen w-full  pt-20 bg-[#1e293b]'>
      <div className="container m-auto bg-[#3c4454] w-[800px] p-25 rounded-4xl">
        <h1 className='text-4xl font-bold py-15 bg-cyan-400 w-[600px] pl-30 rounded-tl-[40px] rounded-tr-[40px] flex items-center gap-4'>
          <FaTasks />
          To Do Application
        </h1>
        <Input />
      </div>
    </div>
  )
}

export default App