import React, { useState, useEffect } from 'react'
import '../style/Banner.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import InfoIcon from '@mui/icons-material/Info'
import axios from './axios'
import requests from './Requests'

function Banner() {
  const [movie, setmMovie] = useState([])

  useEffect(() => {
    async function loadBanner() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setmMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    loadBanner()
  }, [])

  const makeShort = (string, n) => {
    return string?.length >= n ? string.substr(0, n - 1) + '...' : string
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className='bannerContent'>
        <div className='heading text-white'>
          <h1>{movie?.title || movie?.name || movie?.original}</h1>
        </div>
        <div className='description pt-5'>
          <h1 className='text-white'>{makeShort(movie.overview, 150)}</h1>
        </div>

        {/* buttons */}
        <div className='btncontain grid grid-flow-col'>
          <div className='clickedPlay'>
            <button className='playbutton'>
              <div className='flex justify-center items-center'>
                <PlayArrowIcon style={{ fontSize: '150%' }} />
                <h1 className='p-1'>Play</h1>
              </div>
            </button>
          </div>
          <div className='clickedInfo'>
            <button className='info'>
              <div className='flex justify-center items-center'>
                <InfoIcon style={{ fontSize: '150%' }} />
                <h1 className='p-1'>More Info</h1>
              </div>
            </button>
          </div>
        </div>
        {/* buttons */}
      </div>
      <div className='gradient'></div>
    </header>
  )
}

export default Banner
