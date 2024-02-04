import useCurrentUser from '@/hooks/useCurrentUser';
import useFavoriMovie from '@/hooks/useFavorites';
import axios from 'axios';
import React, { useCallback, useMemo, useState } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
interface favoriButtonProps{
    movieId :string;
}

const FavoriButton: React.FC<favoriButtonProps>=({movieId})=> {

  
    const {data:MuteFavori} =useFavoriMovie();
    const {data:user} =useCurrentUser();

    const [isFavorite, setIsFavori] = useState<boolean>(false);

    useMemo(()=>{
        const list =user?.favoriteIds || [];
        setIsFavori(list.includes(movieId));
    }, [user, movieId])

    const toogleFavorites = useCallback(async ()=>{
        try{
            if(isFavorite){
                await axios.delete('/api/favorite', {data:{movieId}})
            }
            else
            {
                await axios.post('/api/favorite', {movieId});
            }

            setIsFavori(!isFavorite);

            MuteFavori();

        }
        catch(error)
        {
            console.log("Error", error)

        }
    },[movieId, isFavorite, MuteFavori])
    const Icon = isFavorite ? CheckIcon : PlusIcon;

   
  return (
    <div onClick={toogleFavorites} 
    className='cursor-pointer border-white rounded-full flex
    items-center justify-center border-2 w-7 h-7 lg:w-11 lg:h-11
    hover:border-neutral-400
    '>
        <Icon className='text-white w-4 h-4 lg:w-8 lg:h-8 '></Icon>


    </div>
  )
}

export default FavoriButton