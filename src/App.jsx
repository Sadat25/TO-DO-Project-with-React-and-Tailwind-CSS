import React from 'react'
import Input from './Component/Input'



const App = () => {
  return (
    <div className='w-full min-h-screen py-15 flex items-center justify-center bg-[#1e293b]'>
      <div className="container w-[800px] bg-[#3c4454] p-25 rounded-4xl">
        <Input />
      </div>
    </div>
  )
}

export default App