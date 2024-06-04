import { createContext, useContext, useReducer } from "react";
import _, { filter } from "lodash";
const MovieContext = createContext()

const initialstate = {

    movies:[],
    filtermovies:[],
    darkmode:true

}


const reducer = (state = initialstate , action)=>
{

    switch(action.type){
            case 'set-movies':
             return {...state,movies:[...action.payload],filtermovies:[...action.payload]}
            case 'filter':{
             const filter = state.movies.filter((movie)=> movie.vote_average >= action.payload)
             return{...state,filtermovies:filter}
            }
            case 'sort':{
                console.log(action)
            if(!action.payload.by){
               const   ordered = _.orderBy(state.movies,action.payload.order , 'desc')
               return {...state,filtermovies:ordered}
            }else{
                 const   ordered = _.orderBy(state.movies,action.payload.order , action.payload.by)
                 return {...state,filtermovies:ordered}     
            }

                      
            }
            case'theme':{
                return {...state,darkmode:!state.darkmode}
            }

                
            default:
                return state
    }

}

export const Movieprovider = ({children})=>{
   let [state , dispatch] = useReducer(reducer , initialstate)


    return(
        <MovieContext.Provider  value={{state , dispatch}} >
            {children}
        </MovieContext.Provider>
    )

}



export const useMovie = ()=>{

      let context = useContext(MovieContext)
      if(!context)
      {
        throw new Error('context undefind')
      }

      let {state , dispatch} = context


      return {
        state
        , dispatch
      }


}
//release-date
//release_date