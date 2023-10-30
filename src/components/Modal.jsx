import React from 'react'
import '../css/modal.css'
// https://www.youtube.com/embed/cOTeeWJwJJNtna6m
export const Modal = ({videoId, onClose}) => {
  return (
    <>
    <div id="video-modal">
      <div className="ratio ratio-16x9" id='video'>
      <iframe src={`https://www.youtube.com/embed/${videoId}`}
          frameborder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
          />
    <span id='close' onClick={()=> onClose()}>X  </span>
      </div>
    </div>
    
    </>
  )
}
