import useCurrentUser from '@/hooks/useCurrentUser';
import useFavoriMovie from '@/hooks/useFavorites';
import axios from 'axios';
import React, { useCallback, useMemo, useState } from 'react'

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


   
  return (
    <div>FavoriButton</div>
  )
}

export default FavoriButton