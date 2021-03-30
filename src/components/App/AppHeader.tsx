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
    </header>
  )
}

export default AppHeader
