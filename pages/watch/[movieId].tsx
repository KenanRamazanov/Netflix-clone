import useMovie from '@/hooks/useMovie';
import { useRouter } from 'next/router'
import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const Watch =()=> {

    const  router = useRouter();
    const {movieId} = router.query;

    const {data} = useMovie(movieId as string);
  return (
    <div className='h-screen w-screen bg-black'> 
            <nav className='fixed w-full p-6 z-20 flex flex-row 
            items-center gap-10 bg-black bg-opacity-70'>
            <ArrowLeftIcon onClick={()=>router.push('/')} className='w-4 md:w-8 lg:w-12 cursor-pointer
            hover:opacity-80 transition duration-0  hover:duration-700
             text-white'></ArrowLeftIcon>
             <p className='text-white text-xl md:text-2xl lg:text-3xl font-semibold'> 
            <span className='font-light'>Watching : </span>  {data?.title}
              </p>

            </nav>

            <video className='h-full w-full' controls src={data?.videoUrl}></video>

      

    </div>
  )
}

export default Watch