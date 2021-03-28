import React from 'react'

const Header = () => {
  return (
    <header className='letter:flex letter:mb-14'>
      <div className='letter:flex-grow letter:flex-shrink'>
        <h1>Kameron Ahler</h1>
        <p className='lead'>Product designer & developer</p>
      </div>
      <div className='letter:flex letter:flex-col letter:flex-shrink-0 letter:justify-end '>
        <p>kamerondesigns.com</p>
      </div>
    </header>
  )
}

export default Header
