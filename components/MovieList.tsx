import React from 'react'
import { isEmpty} from  'lodash';
import { MovieInterface } from '@/types';
import MovieCard from './MovieCard';
interface MovieListProps {

    data:MovieInterface[];
    title:string;
}

const  MovieList: React.FC<MovieListProps>=({data,title})=> {

    if(isEmpty(data)){
        return null;
    }
  return (
    <div className='px-4 space-y-6'>
        <div>
          <p  className='text-white text-md md:text-xl lg:text-2xl font-semibold mt-5 mb-5'>
          {title}
          </p>
          <div className='grid grid-cols-3 gap-2'>
           {data.map((movie) => (
             <MovieCard data={movie} key={movie.id}></MovieCard>
           ))}
          </div>
        </div>
    </div>
  )
}

export default MovieList