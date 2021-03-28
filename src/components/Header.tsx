import React from 'react'

const Header = () => {
  return (
    <header className='mb-8 letter:flex letter:mb-14'>
      <div className='letter:flex-grow letter:flex-shrink'>
        <h1>Kameron Ahler</h1>
        <p className='lead'>Product designer & developer</p>
      </div>
      <div
        className='mt-2
          letter:flex
          letter:flex-col
          letter:flex-shrink-0
          letter:justify-end
          letter:mt-0'
      >
        <a
          className='inline-flex items-center leading-none'
          href='https://kamerondesigns.com'
          target='_blank'
        >
          <span>kamerondesigns.com</span>
          <svg
            aria-hidden='true'
            className='h-3 inline-block ml-1 w-3'
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

export default Header
