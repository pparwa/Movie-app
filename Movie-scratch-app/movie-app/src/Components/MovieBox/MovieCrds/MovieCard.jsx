import React from 'react'
//height
import start from '../../../assets/star.png'
export const MovieCard = ({movie}) => {
  return (
    <a href={`https://themoviedb.org/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie-poster'  />
         <div className="moviedetails">
        <div className='movieinfo'>
          <h5>{movie.original_title}</h5>
          <div className='points' >
              <span>{Math.floor(movie.vote_average)}</span>
          <img src={start}/>
          
         </div>
         
         </div>
         <div className='summery'>
            {movie.overview.slice(0,100)}

         </div>
         </div>
    </a>
  )

}
