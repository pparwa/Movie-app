
import { Navbar } from './Components/Header/Navbar'
import { MovieBox } from './Components/MovieBox/MovieBox'
import './App.css'
import { Movieprovider, useMovie } from './Context/Movie'
function App() {

const {state} = useMovie()
  return (
    <>
    
    <Navbar />
   <MovieBox />


    </>

  )
}

export default App
