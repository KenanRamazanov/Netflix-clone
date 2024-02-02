import { MovieInterface } from '@/types';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react'

interface MovieCartProp{
    data : MovieInterface;
}

const  MovieCard: React.FC<MovieCartProp>=({data})=> {
    const router = useRouter();

//   const {openModal} = useInfoModalStore();

  const redirectToWatch  = useCallback(()=> router.push(`/watch/${data.id}`), [router, data.id] )
  return (
    <div className='group bg-zinc-800 col-span-1 relative h-52'>
         <img onClick={redirectToWatch} src={data.thumbnailUrl} 
        className='h-52 
        w-full object-cover
        shadow-xl rounded-lg
        group-hover:opacity-70
         cursor-pointer'/>
        <div className='opacity-0 w-full z-20 group-hover:opacity-100
         absolute top-0 scale-0 group-hover:scale-105 invisible sm:visible'>

         </div>
    </div>
  )
}

export default MovieCard