import React, { useRef } from 'react'
import DarkModeButton from '../DarkMode/DarkMode'
import Popover from '../Popover/PopoverOpen'

const AppHeader = () => {
  const targettedRef = useRef<HTMLButtonElement>(null)

  return (
    <header className='app-header'>
      <DarkModeButton />
      <div className='app-header__intro'>
        <h1 className='app-header__h1'>Kameron Ahler</h1>
        <div className='relative mt-2'>
          <Popover ref={targettedRef}>
            <p className='app-header__lead'>Product designer & developer</p>
          </Popover>
          <div
            aria-expanded='false'
            ref={targettedRef}
            className='popover__content popover__content--collapsed'
          >
            <p>A fun-sized unicorn, but like for code and design and stuff.</p>
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
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='currentColor'
              d='M23.5 0h-7.071a.5.5 0 00-.354.854l2.3 2.3a.252.252 0 010 .354L6.529 15.347a1.5 1.5 0 102.121 2.121L20.5 5.624a.249.249 0 01.353 0l2.3 2.3a.5.5 0 00.354.147.508.508 0 00.191-.038.5.5 0 00.302-.464V.5a.5.5 0 00-.5-.5z'
            />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default AppHeader
