import React, { useState, forwardRef } from 'react'
import PopoverOverlay from './PopoverOverlay'

const TOGGLE_CLASS = 'popover__content--collapsed'

const PopoverOpen = forwardRef((props, ref) => {
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
      </button>
      <PopoverOverlay expanded={expanded} onClose={handleClose} />
    </>
  )
})

export default PopoverOpen
