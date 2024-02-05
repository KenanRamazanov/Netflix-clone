import Bilboard from "@/components/Bilboard";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavoriMovie from "@/hooks/useFavorites";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import useMovieList from "@/hooks/useMovieList";
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
const {data:user} = useCurrentUser();
const {data:movies} = useMovieList();
const {data:favoriMovie} = useFavoriMovie();
const {isOpen, closeModal} = useInfoModalStore();
  return (
    <>
    <InfoModal visible={isOpen} onClose={closeModal} />
   <Navbar/>
   <Bilboard/>
   <div className='lg:mt-44 sm:mt-5'>      </div>

        <div className='p-6'>
      <MovieList title='Trending' data={movies}></MovieList>
      <MovieList title='Favori List' data={favoriMovie}></MovieList>

      </div>

      <div className='h-96'></div>
    </>
  );
}
