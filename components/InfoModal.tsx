import useInfoModalStore from '@/hooks/useInfoModalStore';
import useMovie from '@/hooks/useMovie';
import { XMarkIcon } from '@heroicons/react/24/solid';
import React, { useCallback, useEffect, useState } from 'react'

interface InfoModalProps{
    visible?: boolean;
    onClose:any;
}

const InfoModal:React.FC<InfoModalProps>=({visible, onClose})=> {
    const [isVisible, setIsvisible] = useState<boolean>(!!visible);

    const {movieId} = useInfoModalStore();
    const {data = {}} = useMovie(movieId);

    useEffect(()=>{
      setIsvisible(!!visible)

    }, [visible]);

    const handleclose = useCallback(()=>{
      setIsvisible(false);
      setTimeout(() => {
        onClose();
      }, 300);
    }, [onClose])

    if(!visible){
      return null;
    }

  return (
    <div className='z-50 transition duration-300 bg-black bg-opacity-80 flex
    justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0'>

      <div className='relative w-auto mx-auto max-w-3xl rounded-xl overflow-hidden'>

      <div className={`${isVisible ? 'scale-100' : 'scale-0'} 
        relative flex-auto bg-zinc-800` }>

             <div className='relative h-96'>

             <video  className="w-full brightness-50 object-cover h-full"
            poster={data?.thumbnailUrl} autoPlay muted src={data?.videoUrl}></video>

            <div onClick={handleclose} className='cursor-pointer absolute top-3 right-3 bg-black rounded-full px-2 py-2'>
              <XMarkIcon className='text-white w-6'></XMarkIcon>
            </div>
            
             </div>




             <div className='px-12 py-10'>
                 {data?.title}
             </div>
            </div>
      </div>
    </div>
  )
}

export default InfoModal