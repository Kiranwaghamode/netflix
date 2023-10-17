import React from 'react'
import '../css/movies.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export const Movies = ({movieList, showTitle}) => {


    const imgUrl = 'https://image.tmdb.org/t/p/original'

   


  return (
    <>
    <h4 id='main-title'>{showTitle}</h4>

    <div className="movie-row">
    {
        movieList.map((movie, index)=>(
            <div key={index} className='movie-item'>
                <img src={`${imgUrl}${movie.poster_path}`} alt="" />
            </div>
        ))
    }
  
    
    </div>
    </>
  )
}
