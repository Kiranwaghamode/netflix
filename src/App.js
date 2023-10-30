import { useEffect, useState } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Movies } from './components/Movies';
import axios from 'axios';
import { Modal } from './components/Modal';



function App() {

  // const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=c0356726f1b2633834c9a8ef55bb01ed'

  // For popular Movies
  const [popularMovies, setpopularMovies] = useState([]);
  const [popularMovieTitle, setpopularMovieTitle] = useState('');
  const [popularMovieDesc, setpopularMovieDesc] = useState('');
  const [popularMovieBackdrop, setpopularMovieBackdrop] = useState('');


  //For video Modal
  const [videoKey, setvideoKey] = useState('');
  const [isActive, setisActive] = useState(false);
  const [videoId, setvideoId] = useState('507089');


  // For now playing Movies
  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);

  // // For top Rated Movies
  const [topRated, settopRated] = useState([]);

  //  // For upcoming Movies
  const [upcoming, setupcoming] = useState([]);

  useEffect(() => {
    ; (async () => {
      // for popular movies
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c0356726f1b2633834c9a8ef55bb01ed');
      const newResponse = await response.data.results;
      // console.log(newResponse)
      setpopularMovies(newResponse)
      setvideoId(newResponse[0].id);
      setpopularMovieTitle(newResponse[0].title);
      setpopularMovieDesc(newResponse[0].overview);
      setpopularMovieBackdrop(newResponse[0].backdrop_path);
    })()


      ; (async () => {
        // for Now palying movies
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c0356726f1b2633834c9a8ef55bb01ed');
        const newResponse = await response.data.results;

        setnowPlayingMovies(newResponse);

      })()

      ; (async () => {
        // for Top rated movies
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c0356726f1b2633834c9a8ef55bb01ed');
        const newResponse = await response.data.results;

        settopRated(newResponse);
      })()

      ; (async () => {
        // for upcoming movies
        const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c0356726f1b2633834c9a8ef55bb01ed');
        const newResponse = await response.data.results;

        setupcoming(newResponse);
      })()
  }, [])

  const combinedList = [...popularMovies, ...nowPlayingMovies, ...topRated, ...upcoming]


  function popular(id) {
    const newMovieObj = combinedList.filter((movie) => {
      return movie.id === id
    });

    setvideoId(id);

    console.log(videoId)
    setpopularMovieTitle(newMovieObj[0].title);
    setpopularMovieDesc(newMovieObj[0].overview);
    setpopularMovieBackdrop(newMovieObj[0].backdrop_path);
  }


  useEffect(() => {
    ;(async () => {
      // for Modal of youtube video
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=c0356726f1b2633834c9a8ef55bb01ed`);
      const newResponse = await response.data.results;

      const trailer = newResponse.find((movie)=> movie.type === "Trailer")

      // console.log(trailer);
      trailer?setvideoKey(trailer.key): console.log(trailer)
      
    })()
  }, [videoId])
  





  function openModal(){
    setisActive(true);
  }

  function closeModal(){
    setisActive(false);
  }








  return (
    <>
      {/*  */}

      {isActive && (<Modal videoId={videoKey} onClose={closeModal}/>)}
      <Banner play={openModal} movieTitle={popularMovieTitle} movieDesc={popularMovieDesc} backdrop={popularMovieBackdrop} />
      <Movies movieList={popularMovies} showTitle={"Popular Movies"} sliderMovie={popular} />
      <Movies movieList={nowPlayingMovies} showTitle={"Now Playing Movies"} sliderMovie={popular} />
      <Movies movieList={topRated} showTitle={"Top Rated Movies"} sliderMovie={popular} />
      <Movies movieList={upcoming} showTitle={"Upcoming Movies"} sliderMovie={popular} />





    </>
  );
}

export default App;
