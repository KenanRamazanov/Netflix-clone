import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react'


export async function getServerSideProps(context: NextPageContext) {

  const session = await getSession(context);

  if(!session){
    return{
      redirect:{
        destination:'/auth',
        permanent : false,
      }
    }
  }

  return{
    props: {}
  }
  
}

const ImagesUserProfile= [
  'images/default-blue.png',
  'images/default-green.png',
  'images/default-red.png',
  'images/default-slate.png'

]
interface CardProps {
  name:string;
}

const CardUser: React.FC<CardProps>=({name})=>{

  const ImgSrc = ImagesUserProfile[Math.floor(Math.random()*4)];

  return(
    <div className='group flex-row w-52 mx-auto'>
      <div className='w-48 h-48 rounded-xl items-center
       justify-center border-2 border-transparent
       group-hover:border-white overflow-hidden '>
      <img draggable={false} src={ImgSrc}/>
      </div>
     
     <div className='group-hover:text-white mt-6 text-gray-300 text-2xl text-center lg:text-3xl'>{name}</div> 

    </div>
  )
  

}

function profiles() {
  const {data :user} = useCurrentUser();
  const router = useRouter();

  const selectProfile = useCallback(()=>{
    router.push('/');
  }, [router])

  return (
    <div className='flex items-center justify-center h-full'>
      <div className='flex flex-col'>

        <h1 className='text-white text-4xl lg:text-7xl text-center'>Who is watching ? </h1>
     
        <div className='flex items-center justify-center gap-8 mt-14'>
           <div onClick={()=>selectProfile()}>
            <CardUser name={user?.name}></CardUser>


          </div>
        </div>
      </div>
    </div>
  )
}

export default profiles