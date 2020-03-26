import React, { Component } from 'react'

const Movie = (props) => {
  const posterURL = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`

  return (
    <li>
      <p>{props.title}</p>
      <div class="movie-image-and-caption">
        <img src={posterURL} />
        <p class="overview">{props.overview}</p>
      </div>
    </li>
  )
}

export default Movie
