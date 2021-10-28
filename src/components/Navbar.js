import React, { useEffect, useState } from 'react'
import '../style/navstyle.css'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

function Navbar() {
  const [transparent, setTransparent] = useState(false)
  const [textBox, setTextBox] = useState(false)
  const transparency = () => {
    if (window.scrollY > 100) {
      setTransparent(true)
    } else {
      setTransparent(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transparency)
    return () => {
      window.removeEventListener('scroll', transparency)
    }
  }, [])

  const handleClick = () => {
    if (textBox === false) {
      setTextBox(true)
    } else {
      setTextBox(false)
    }
    console.log(textBox)
  }

  return (
    <div
      className={`nav w-screen grid grid-flow-col grid-col-2 items-center${
        transparent ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className='flex items-center'>
        <img
          className='logo'
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
        />
        <ul>
          <li className='navoption text-white'>
            <a href='/'>Home</a>
            <a href='/'>TV Shows</a>
            <a href='/'>Movies</a>
            <a href='/'>New & Popular</a>
            <a href='/'>My List</a>
          </li>
        </ul>
      </div>
      <div className='right-nav flex items-center ml-auto'>
        <div
          className={`${
            textBox ? 'searchBox activeSearch flex items-center' : 'searchBox'
          }`}
        >
          <SearchIcon
            style={{ fontSize: '150%' }}
            className='right text-white ml-auto cursor-pointer'
            onClick={handleClick}
          />
          <input
            className={`search ${textBox ? 'showWidth' : 'w-0'}`}
            name=''
            id=''
            placeholder='Titles, people, genres'
          ></input>
        </div>
        <NotificationsIcon
          style={{ fontSize: '150%' }}
          className='right text-white cursor-pointer'
        />
        <div className='user flex items-center space-x-1 cursor-pointer'>
          <img
            className='object-contain h-8 rounded'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt=''
          />
          <ArrowDropDownIcon className='text-white' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
