import React from "react";

import "./DarkMode.css";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import { useMovie } from "../../Context/Movie";

const DarkMode = () => {
   const SetTimetolight = ()=>{
    document.querySelector('body').setAttribute('data-theme',"light")
    localStorage.setItem('theme','light')
   }
   const SetTimetodark = ()=>{
    document.querySelector('body').setAttribute('data-theme',"dark")
    localStorage.setItem('theme','dark')
   }
   const theme = localStorage.getItem('theme')
   if(theme == 'light')
   {
    SetTimetolight()
   }else{
    SetTimetodark()
   }

   const toggelTheme = (event)=>{
        if(event.target.checked)
        {
            SetTimetodark()
        }else{
            SetTimetolight()
        }
   }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={(event)=>toggelTheme(event)}
                defaultChecked={true}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
