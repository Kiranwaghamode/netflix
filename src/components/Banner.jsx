import React from 'react'
import '../css/banner.css'

export const Banner = () => {
  return (
    <>
    <div className="banner">
        
        <img src="https://image.tmdb.org/t/p/original/cHNqobjzfLj88lpIYqkZpecwQEC.jpg" alt="" />
        <div className="movie-details">
            <h1>STRANGER THINGS</h1>
            <h5>Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.</h5>
        </div>

        <div className="play">Play</div>
        <div className="moreInfo">More Info</div>

    </div>
    </>
  )
}
