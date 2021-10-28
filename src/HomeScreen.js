import React from 'react'
import Banner from './components/Banner.js'
import Navbar from './components/Navbar.js'
import requests from './components/Requests'
import Row from './components/Row.js'
const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div style={{ marginTop: '-50px' }}>
        <Row
          title='NETFLIX ORIGINALS'
          fetchURL={requests.fetchNetflixOriginals}
          islargeRow
        />
        <Row
          title='Trending Now'
          fetchURL={requests.fetchTrending}
          islargeRow
        />
        <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
        <Row
          title='Action Movies'
          fetchURL={requests.fetchActionMovies}
          islargeRow
        />
        <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
        <Row
          title='Romance Movies'
          fetchURL={requests.fetchRomanticMovies}
          islargeRow
        />
        <Row title='Documentaries' fetchURL={requests.fetchDocumentaries} />
      </div>
    </div>
  )
}

export default HomeScreen
