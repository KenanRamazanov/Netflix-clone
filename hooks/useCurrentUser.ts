
import fetcher from "@/libs/fetcher";
import useSWR from "swr";


const useCurrentUser = () =>{
    const{data, error, isValidating, mutate} =useSWR('/api/current', fetcher);
    return{
        data,
        error,
        isValidating,
        mutate
    }
};

export default useCurrentUser