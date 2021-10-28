import axios from './axios'
import React, { useEffect, useState } from 'react'
import '../style/Row.css'

function Row({ title, fetchURL, islargeRow = false }) {
  const [movies, setMovies] = useState([])
  const baseURL = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchURL])
  return (
    <div className='row text-white'>
      <h2 className='topic'>{title}</h2>
      <div className='row-posters'>
        {movies.map(
          (movie) =>
            ((islargeRow && movie.poster_path) ||
              (!islargeRow && movie.backdrop_path)) && (
              <img
                className={`row-poster ${islargeRow && 'row-posterLarge'}`}
                key={movie.id}
                src={`${baseURL}${
                  islargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  )
}

export default Row
