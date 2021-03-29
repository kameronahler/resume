import React, { useRef } from 'react'
import DarkModeButton from '../DarkMode/DarkMode'
import PopoverButton from '../Popover/PopoverButton'

const AppHeader = () => {
  const targettedRef = useRef(null)

  return (
    <header className='app-header'>
      <DarkModeButton />
      <div className='app-header__intro'>
        <h1 className='app-header__h1'>Kameron Ahler</h1>
        <div className='relative'>
          <PopoverButton ref={targettedRef}>
            <p className='lead'>Product designer & developer</p>
          </PopoverButton>
          <div
            aria-expanded='false'
            ref={targettedRef}
            className='popover__content popover__content--collapsed'
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo
              maxime suscipit dolor assumenda quod reprehenderit sequi adipisci,
              blanditiis libero. Itaque fuga, beatae nobis dolorem omnis odit
              blanditiis dignissimos dolore.
            </p>
          </div>
        </div>
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
