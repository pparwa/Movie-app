import React, { useState } from 'react'
import { useMovie } from '../../../Context/Movie'
export const MovieFilter = () => {
  const {dispatch} = useMovie()
  const [sort , setsort] = useState({
    order:'',
    by:''
  })

  const handelsorting = (event , dispatch)=>{
   if(event.target.name === 'order')
   {
    setsort({...sort,order:event.target.value})
   }else{
    setsort({...sort,by:event.target.value})
   }
   console.log(sort)
   dispatch({type:'sort',payload:sort})
  }
  return (
    <>
    <ul className='Stars'>
       
        <li onClick={()=>dispatch({type:'filter',payload:8})}>+8STAR</li>
         <li className='active'  onClick={()=>dispatch({type:'filter',payload:7})}>+7STAR</li>
        <li  onClick={()=>dispatch({type:'filter',payload:6})}>+6STAR</li>
     </ul>
         <div className='Sort'>
        <select name='order' onChange={(event)=>handelsorting(event,dispatch)}>
          <option value='#'>Order</option>
            <option value={'release_date'}>Date</option>
            <option value={'vote_avereage'}>Rating</option>
        </select>
     </div>
     <div className='Sort'>
        <select onChange={(event)=>handelsorting(event,dispatch)}  name='by'>
          <option value='#'>By</option>
            <option value={'asc'}>Ascending</option>
            <option value={'desc'}>Dscending</option>
        </select>
     </div>
     
     </>

  )
}
