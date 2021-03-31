import React, { useState, forwardRef } from 'react'
import PopoverOverlay from './PopoverOverlay'

const COLLAPSED_CLASS = 'popover__content--collapsed'
const RIGHT_HAND_SIDE_CLASS = 'popover__content--right-hand-side'

const PopoverOpen = forwardRef((props, ref) => {
  const [expanded, setExpanded] = useState(false)

  const getPositionClass = (e: object): string | null => {
    const appCoords = document.getElementById('app').getBoundingClientRect()
    const appMiddle = appCoords.width / 2 + appCoords.x
    const buttonCoords = e.currentTarget.getBoundingClientRect()
    return buttonCoords.x >= appMiddle ? RIGHT_HAND_SIDE_CLASS : null
  }

  const handleOpen = (e: object): void => {
    ref.current.setAttribute('aria-expanded', 'true')
    ref.current.classList.remove(COLLAPSED_CLASS)
    ref.current.classList.add(getPositionClass(e))
    setExpanded(true)
  }

  const handleClose = (): void => {
    ref.current.setAttribute('aria-expanded', 'false')
    ref.current.classList.add(COLLAPSED_CLASS)
    setExpanded(false)
  }

  return (
    <>
      <button
        aria-label={expanded ? 'Close more info' : 'See more info'}
        className={`popover__button ${
          expanded ? 'popover__button--expanded' : ''
        }`}
        onClick={e => {
          if (expanded) {
            handleClose()
          } else {
            handleOpen(e)
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
