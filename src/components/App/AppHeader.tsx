import React, { useRef } from 'react'
import DarkModeButton from '../DarkModeButton/DarkModeButton'
import Popover from '../Popover/Popover'
import ReactMarkdown from `react-markdown`

const LEAD_TEXT = `
### This again? Can such a thing even be?

I know, right? Will society allow it?

I've gravitated more and more toward development the longer I've been a designer. You could say I'm a developer's designer, or a  fun-sized design unicorn. I prefer to help implement what I've designed; bridging the gap between design and engineering is really satisfying.
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
            <p className='app-header__lead  popover__button-inner'>
              Product designer & UI developer
            </p>
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
