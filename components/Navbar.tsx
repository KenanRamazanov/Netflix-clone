import React from 'react'
import { BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
  return (
   <nav className='w-full fixed z-20'>
    <div className='px-4 py-6'>
      <img src="/images/logo.png" alt="" />
    </div>
   </nav>
  )
}

export default Navbar