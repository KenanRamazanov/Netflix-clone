
import fetcher from "@/libs/fetcher";
import useSWR from "swr";


const useMovie = (id? : string) =>{
    const{data, error, isValidating} =useSWR(id ? `/api/movie/${id}` : null, fetcher,
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

export default useMovie