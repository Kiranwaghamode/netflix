import React from 'react'
import '../css/movies.css'

export const Movies = ({ movieList, showTitle, sliderMovie }) => {


  const imgUrl = 'https://image.tmdb.org/t/p/original';



  return (
    <>
      <h4 id='main-title'>{showTitle}</h4>

      <div className="movie-row">
        {
          movieList.map((movie, index) => (
            <div id='movie-item' key={index} >
              <img  src={`${imgUrl}${movie.poster_path}`} alt="" onClick={()=>sliderMovie(movie.id)} />
            </div>
          ))
        }
      </div>
    </>
  )
}
