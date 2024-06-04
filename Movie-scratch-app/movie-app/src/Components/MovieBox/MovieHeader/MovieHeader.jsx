import React from 'react'
import './MovieHeader.css'
import { MovieFilter } from './MovieFilter'
export const MovieHeader = () => {
  return (
    <div className='MovieHeader'>
        <div className='logo'>
            <h2>Popular</h2>
        </div>
        <div className='MovieFilter'>
               <MovieFilter />
        </div>
    </div>
  )
}
