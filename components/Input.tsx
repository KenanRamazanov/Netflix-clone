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
    <label
     className='absolute
     text-base
     scale-75
     -translate-y-1
     z-10
     left-7
    text-zinc-400
    peer-placeholder-shown:scale-100
    peer-placeholder-shown:translate-y-0
    peer-focus:scale-75
    peer-focus:-translate-y-2
    duration-150
    origin-[0]
    transform
    top-3'
    htmlFor={id}
    >
        {label}
    </label>
    </div>
  )
}

export default Input