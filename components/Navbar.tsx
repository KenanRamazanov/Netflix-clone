import React from 'react'
import { BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import NavItem from './NavItem'
const Navbar = () => {
  return (
   <nav className='w-full fixed z-20'>
    <div className='px-4 py-6 flex flex-row transition'>
      <img src="/images/logo.png" className='lg:h-8 h-6' />
      <div className='flex-row lg:flex hidden  gap-7 ml-12'>
         <NavItem name='Home' active></NavItem>
         <NavItem name='Films' ></NavItem>
         <NavItem name='Series' ></NavItem>
         <NavItem name='New & Popular' ></NavItem>
         <NavItem name='My List' ></NavItem>
        <NavItem name='Browse My Languages' ></NavItem>

         </div>
    </div>
   </nav>
  )
}

export default Navbar