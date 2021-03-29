import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    document.body.classList.toggle('dark-mode')
    setDarkMode(!darkMode)
  }

  return (
    <>
      <button onClick={handleClick} className='darkmode-button'>
        <span className='sr-only'>
          {darkMode ? 'Turn light mode on' : 'Turn dark mode on'}
        </span>
        <CSSTransition
          in={darkMode}
          timeout={250}
          classNames={{
            enter: 'darkmode-button__switch-handle--enabled',
            enterDone: 'darkmode-button__switch-handle--enabled',
          }}
        >
          <span className='darkmode-button__switch-handle'>
            {darkMode ? (
              <svg
                className='darkmode-button__svg darkmode-button__svg--dark'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 16 16'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.179 7.973v0A5.973 5.973 0 004 2.276h0A5.971 5.971 0 114 13.67h0a5.973 5.973 0 004.179-5.697h0z'
                  clipRule='evenodd'
                />
              </svg>
            ) : (
              <svg
                className='darkmode-button__svg darkmode-button__svg--light'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 16 16'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.122 5.879A3 3 0 115.88 10.12a3 3 0 014.242-4.242zM8 1v2M8 13v2M15 8h-2M3 8H1M12.947 3.053l-1.414 1.414M4.467 11.533l-1.414 1.414M12.947 12.947l-1.414-1.414M4.467 4.467L3.053 3.053'
                />
              </svg>
            )}
          </span>
        </CSSTransition>
      </button>
    </>
  )
}

export default DarkModeButton
