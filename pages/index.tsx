import useCurrentUser from "@/hooks/useCurrentUser";
import { Metadata, NextPageContext } from "next";
import { getSession } from "next-auth/react";
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
    <h1>Hello index</h1>
    </>
  );
}
