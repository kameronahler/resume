import React, { useState, forwardRef } from 'react'
import PopoverOverlay from './PopoverOverlay'

const TOGGLE_CLASS = 'popover__content--collapsed'

const PopoverButton = forwardRef((props, ref) => {
  const [expanded, setExpanded] = useState(false)

  const handleOpen = () => {
    ref.current.setAttribute('aria-expanded', 'true')
    ref.current.classList.remove(TOGGLE_CLASS)
    setExpanded(true)
  }

  const handleClose = () => {
    ref.current.setAttribute('aria-expanded', 'false')
    ref.current.classList.add(TOGGLE_CLASS)
    setExpanded(false)
  }

  return (
    <>
      <button
        aria-label={expanded ? 'Close more info' : 'See more info'}
        className={`popover__button ${
          expanded ? 'popover__button--expanded' : ''
        }`}
        onClick={() => {
          if (expanded) {
            handleClose()
          } else {
            handleOpen()
          }
        }}
      >
        {props.children}
        {expanded ? (
          <span className='popover__button-close'>
            <svg
              className='popover__button-close-svg'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 12 13'
            >
              <path
                fill='currentColor'
                fill-rule='evenodd'
                d='M11.331 2.478a1 1 0 00-1.414-1.414L6 4.98 2.083 1.064A1 1 0 00.67 2.478l3.917 3.917L.669 10.31a1 1 0 101.414 1.415L6 7.809l3.917 3.917a1 1 0 001.414-1.415L7.414 6.395l3.917-3.917z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        ) : null}
      </button>
      <PopoverOverlay expanded={expanded} onClose={handleClose} />
    </>
  )
})

export default PopoverButton
