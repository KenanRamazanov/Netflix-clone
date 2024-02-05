import useInfoModalStore from '@/hooks/useInfoModalStore';
import useMovie from '@/hooks/useMovie';
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
    <div>
        {data?.title}
    </div>
  )
}

export default InfoModal