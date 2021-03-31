import React, { useRef } from 'react'
import DarkModeButton from '../DarkMode/DarkMode'
import Popover from '../Popover/PopoverButton'
import ReactMarkdown from `react-markdown`

const LEAD_TEXT = `
### Wot?

I know, not this convo again, right? I started out as a designer, then UI designer,
then UX designer, but the one thing that never changed was that I was always
coding.

I guess you could think of me as a fun-sized design unicorn.
`

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
            className='popover__content popover__content--markdown'
          >
            <ReactMarkdown>{LEAD_TEXT}</ReactMarkdown>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
