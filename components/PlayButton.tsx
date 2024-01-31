import { useRouter } from 'next/router'
import React from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'

interface PlayButtonProps{
    movieId:string
}

const PlayButton: React.FC<PlayButtonProps>=({movieId})=> {

    const router = useRouter();
  return (
    <button className=' bg-white text-white bg-opacity-25  py-1 md:py-3
    px-3  md:px-6 
    w-auto
    text-xs lg:text-lg
    font-semibold
    flex
    flex-row
    item-center
    hover:bg-opacity-15
    transition' 
    onClick={()=>router.push(`/watch/${movieId}`)}>
       <PlayIcon className='w-4 md:w-5 lg:md-7 mr-2'></PlayIcon> Play
        </button>
  )
}

export default PlayButton