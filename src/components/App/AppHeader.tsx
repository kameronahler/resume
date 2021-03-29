import React from 'react'
import DarkModeButton from '../DarkMode/DarkMode'

const AppHeader = () => {
  return (
    <header className='app-header'>
      <DarkModeButton />
      <div className='app-header__intro'>
        <h1 className='app-header__h1'>Kameron Ahler</h1>
        <p className='lead'>Product designer & developer</p>
      </div>
      <div className='app-header__external-link-wrapper'>
        <a
          className='app-header__external-link'
          href='https://kamerondesigns.com'
          target='_blank'
        >
          <span>kamerondesigns.com</span>
          <svg
            aria-hidden='true'
            className='app-header__external-link-svg'
            fill='none'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='currentColor'
              d='M9.5.748a.75.75 0 100 1.5h3.19L.967 13.97a.75.75 0 101.06 1.06L13.75 3.31v3.189a.75.75 0 001.5 0v-5a.75.75 0 00-.75-.75h-5z'
            />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default AppHeader
