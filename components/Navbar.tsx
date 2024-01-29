import React from 'react'
import { BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
  return (
   <nav className='w-full fixed z-20'>
    <div className='px-4 py-6 flex flex-row transition'>
      <img src="/images/logo.png" className='lg:h-8 h-6' />
      <div className='flex-row lg:flex hidden  gap-7 ml-12'>
                 
         </div>
    </div>
   </nav>
  )
}

export default Navbar