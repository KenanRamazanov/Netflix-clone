import useBillboard from '@/hooks/useBilboard';
import React from 'react'

const Bilboard = () => {
    const {data} = useBillboard();
  return (
    <div className='relative h-[32rem]'>

    </div>
  )
}

export default Bilboard