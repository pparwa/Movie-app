import React from 'react'
import { MovieHeader } from './MovieHeader/MovieHeader'
import { MovieCards } from './MovieCrds/MovieCards'
import './MovieBox.css'
import { useMovie } from '../../Context/Movie'
export const MovieBox = () => {
 let {state , dispatch} = useMovie()
 console.log(state)
  return (
    <div className='MovieBox'>
        <MovieHeader />
        <MovieCards />
    </div>
  )
}
