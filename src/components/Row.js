import axios from './axios'
import React, { useEffect, useState } from 'react'
import '../style/Row.css'

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([])
  const baseURL = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchURL])
  // console.log(movies)
  return (
    <div className='row text-white'>
      <h2>{title}</h2>
      <div className='row-poster'>
        {movies.map((movie) => (
          <img
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
