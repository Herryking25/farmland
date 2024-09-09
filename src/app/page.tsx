import React from 'react'

const page = () => {
  return (
   <div className='flex justify-center items-center'>
         <div className='w-[1000px] h-[70px] text-black border flex justify-between font-bold  items-center mt-4 ml-20'>
      <div>
        <p className='text-[16px]'>Wemmy<span className='text-[#67f167]'>Field</span></p>
      </div>
      <div>
        <ul className='flex flex-row gap-8'>
        <li>Features</li>
        <li>Investors</li>
        <li>Contact</li>
        </ul>
      </div>
      <div className='flex gap-6'>
        <button>Log in</button>
        <button className='w-[160px] h-[40px] bg-green-950 rounded-full'>Get Started</button>
      </div>
    </div>
   </div>
  )
}

export default page
