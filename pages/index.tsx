import useCurrentUser from "@/hooks/useCurrentUser";
import { Metadata, NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
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
export default function Home() {
const {data :user} = useCurrentUser();
  return (
    <>
    <h1 className="text-4xl bg-red-500 font-bolc underline">
      Hello index
      
      </h1>
      <p className="text-white">
      {user?.email}
      </p>
      <button onClick={()=> signOut()} className="w-full bg-black text-white text-xl">Logout</button>
    </>
  );
}
