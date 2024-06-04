import React, { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import './MovieCards.css'
import { useMovie } from '../../../Context/Movie'
export const MovieCards = () => { 
    const [filterMovies, setFiltermovies] = useState([])
    let {state , dispatch} = useMovie()
    async function getmovies(dispatch){
     const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=57c4d17540186d1111851cf599af3963')
      const data = await res.json()
      console.log(data)
           dispatch(data.results)
     dispatch({type:'set-movies',payload:data.results})
    }
    useEffect(()=>{
      getmovies(dispatch)
      console.log(state)
    
    },[])
  return (
    <div className='MovieCards'>
       
       {state.filtermovies && state.filtermovies.map((movie,index)=>(
           <div className="MovieCard">
          <MovieCard  key={movie.id} movie={movie} />
               </div>
       ))}


      
    </div>
  )
}
