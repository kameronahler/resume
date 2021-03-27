import React from 'react'

const Header = () => {
  return (
    <header className='flex mb-14'>
      <div className='flex-grow flex-shrink'>
        <h1>Kameron Ahler</h1>
        <p className='lead'>Product designer & developer</p>
      </div>
      <div className='flex-shrink-0'>
        <ul>
          <li>kamerondesigns.com</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
