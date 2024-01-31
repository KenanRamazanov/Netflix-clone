import useCurrentUser from '@/hooks/useCurrentUser';
import React from 'react'
interface AccountProp{
    visible?:boolean
}

const AccountMenu: React.FC<AccountProp>=({visible})=> {

    const {data : user } = useCurrentUser();

    if(!visible){

        return null;
    }

  return (
    <div className='bg-gray-950 w-48 absolute rounded-lg top-8 
    border-2 right-0 py-5 flex-col border-gray-800 flex'>
    <div className='flex flex-col gap-3'>
      <div className='px-3  flex flex-row gap-3 items-center w-full'>
      <img className='w-6' src='/images/default-red.png'></img>
         <p className=' cursor-pointer  text-white text-lg hover:underline'>{user?.name}</p>
      </div>
      <hr className='bg-gray-500 border-0 h-px my-4' />
      <div onClick={()=>{}} className=' cursor-pointer px-3 text-white text-center hover:underline'>
                Sign out Netflix
            </div>

    </div>
    </div>
  )
}

export default AccountMenu