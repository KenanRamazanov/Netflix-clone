import useBillboard from '@/hooks/useBilboard';
import React from 'react'
import PlayButton from './PlayButton';

function Billboard() {
    const {data} = useBillboard();
  return (
    <div className='relative h-[32rem]'>

<video poster={data?.thumbnailUrl} autoPlay muted loop src={data?.videoUrl} 
className='h-[32rem] lg:h-[44rem] object-cover brightness-50 w-full duration-500'></video>
  
  <div className='absolute top-[30%] md:top-[40%]
   lg:top-[50%] text-white'>
              <p className='text-4xl lg:text-6xl ml-6 lg:ml-9 font-bold'>
                {data?.title} 
                </p>

               <p 
                  className='text-sm lg:text-md md:w-[70% lg:w-[50%] ml-6 lg:ml-9 py-4 lg:py-8 '>
                {data?.description}
                </p>

    <div className='flex flex-row ml-6 lg:ml-9 items-center mt-5 md:mt-7 gap-3'>
   
   <PlayButton movieId={data?.id}></PlayButton>
        <button className='
        bg-white text-white bg-opacity-25  py-1 md:py-3
        px-3  md:px-6 
        w-auto
        text-xs lg:text-lg
        font-semibold
        flex
        flex-row
        item-center
        hover:bg-opacity-15
        transition
        '
        >More Info
        </button>


    </div>

  </div>
 




    </div>
  )
}

export default Billboard