
import fetcher from "@/libs/fetcher";
import useSWR from "swr";


const useFavoriMovie = () =>{
    const{data, error, isValidating} =useSWR('/api/favorilist', fetcher,
    {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    return{
        data,
        error,
        isValidating,
    }
};

export default useFavoriMovie