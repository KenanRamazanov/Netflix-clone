import Input from '@/components/Input'
import React from 'react'

const auth = () => {
  return (
    <div
   className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover "
    >
    <div
     className='bg-black h-full w-full bg-opacity-45'
     >
   <nav className='px-12 py-6'>
   <img src="/images/logo.png" className='h-12'/>
   </nav>
   
   <div className='flex justify-center'>
       <div className='bg-black bg-opacity-85 px-20 py-20 self-center mt-2 lg:w-2/5 rounded-xl w-full'>
        <h2 className='text-white text-5xl mb-8 font-semibold'>
          Register
        </h2>
        <div className='flex flex-col gap-4'>
          <Input/>
        </div>
       </div>
   </div>

    </div>
    </div>
  )
}

export default auth