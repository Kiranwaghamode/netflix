
import '../css/banner.css'

export const Banner = ({movieTitle, movieDesc, backdrop, play}) => {


  const newDesc = movieDesc.split(" ").slice(0, 30).join(" ");
  const newTitle = movieTitle.split(" ").slice(0, 4).join(" ");

  return (
    <>
    <div className="banner">
        
        <img src={`https://image.tmdb.org/t/p/original${backdrop}`} alt="" />
        <div className="image-overlay"></div>
        <div className="movie-details">
            <h1 id='main-heading'>{newTitle}...</h1>
            <h5 id='main-desc'>{newDesc}....</h5>
            <button id='play' onClick={()=>play()}><i class="fa-solid fa-play"></i>    Watch Trailer</button>
            <button id="info"><i class="fa-solid fa-list"></i>More Info</button>
        </div>

    </div>
    </>
  )
}
