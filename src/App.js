import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'

const App = () => {
  const [movies, setMovies] = useState([])

  const fetchMovies = (event) => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=a6d1cf27a5747141f1db754bed4bc307`
    )
      .then((response) => response.json())
      .then((apiData) => {
        const newMovies = apiData.results

        console.log(newMovies)

        setMovies(newMovies)
      })
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <main>
      <header>
        <h1>Party Like It is 1989</h1>
        <p>Made for SDG</p>
      </header>

      <ul class="movies">
        {movies.map((movie) => {
          return (
            <Movie
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
            />
          )
        })}
      </ul>
    </main>
  )
}

export default App
