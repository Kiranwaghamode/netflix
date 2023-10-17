import { useEffect, useState } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Movies } from './components/Movies';
import axios from 'axios';

function App() {

  // const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=c0356726f1b2633834c9a8ef55bb01ed'


  const [popularMovies, setpopularMovies] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c0356726f1b2633834c9a8ef55bb01ed`).then((resp)=>{
      setpopularMovies(resp.data.results)
    })
  }, [])

  return (
    <>
    <Banner/>
    <Movies movieList={popularMovies} showTitle={"Popular Movies"}/>
    
    
    </>
  );
}

export default App;
