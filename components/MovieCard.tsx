import { MovieInterface } from '@/types';
import React from 'react'

interface MovieCartProp{
    data : MovieInterface;
}

const  MovieCard: React.FC<MovieCartProp>=({data})=> {
  return (
    <div>MovieCard</div>
  )
}

export default MovieCard