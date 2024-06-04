import React from 'react'
import fire from '../../assets/fire.png'
import star from '../../assets/glowing-star.png'
import party from '../../assets/partying-face.png'
import face from "../../assets/star.png"
import DarkMode from '../DarkMode/DarkMode'

export const Navbar = () => {
  return (
    <nav className='navbar'>
       <div className='logo'>
            <h1>MovieMinac</h1>
       </div>
       <ul>
        <li><DarkMode /></li>
           <li><img src={fire} alt="fire" /><span>Top Rated</span></li>
             <li><img src={star} alt="star" /><span>Popular</span></li>
               <li><img src={party} alt="fire" /><span>New</span></li>
        
       </ul>
    </nav>
  )
}
