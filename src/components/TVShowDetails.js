import React from 'react'
import FiveStarRating from './FiveStarRating';

const TVShowDetails = ({tvShow}) => {
  const rating = tvShow.vote_average / 2;
  return (
    <div>
        <div className='title'>{tvShow.name}</div>
        <div className='ratContain'>
          <FiveStarRating rating={rating}/>
          <div className='rating'>{rating}/5</div>
        </div>
        <div className='overview'>{tvShow.overview}</div>
    </div>
  )
}

export default TVShowDetails;