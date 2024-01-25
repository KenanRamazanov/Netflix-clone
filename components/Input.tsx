import React from 'react'

interface InputProps{
  id:string;
  onChange:any;
  value:string;
  label:string;
  type?:string;
}

const Input:React.FC<InputProps> = ({
    id,
    label,
    value,
    onChange,
    type
}) => {
  return (
    <div className='relative'>
    <input
    id={id}
    value={value}
    onChange={onChange}
    type={type}
    className='block rounded-xl
      px-7
      pt-5
      pb-1
      w-full
      text-base
      text-white
      bg-neutral-600
      focus:outline-none
      focus:right-0
      peer
      '
      placeholder='  '
    />
    <label>
        {label}
    </label>
    </div>
  )
}

export default Input