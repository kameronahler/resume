import React, { useState, forwardRef } from 'react'
import PopoverOverlay from './PopoverOverlay'

const EXPANDED_CLASS = 'popover__content--expanded'

const PopoverButton = forwardRef((props: object, ref: any) => {
  const [expanded, setExpanded] = useState(false)

  const getPositions = (e: MouseEvent) => {
    const app = document.getElementById('app').getBoundingClientRect()
    const clickedButton = e.currentTarget.getBoundingClientRect()
    const appMiddle = app.width / 2 + app.left

    const styles = { left: null, right: null, top: null, maxWidth: null }
    if (clickedButton.left >= appMiddle ? true : false) {
      styles.right = 'calc(100% + 2rem)'
      styles.top = '0'
      styles.maxWidth = clickedButton.left - app.left - 32 + 'px'
    } else {
      styles.left = '0'
      styles.maxWidth = app.right - clickedButton.left + 'px'
    }
    return styles
  }

  const handleOpen = (e: MouseEvent): void => {
    ref.current.classList.add(EXPANDED_CLASS)
    ref.current.setAttribute('aria-expanded', 'true')

    Object.assign(ref.current.style, getPositions(e))
    setExpanded(true)
  }

  const handleClose = (): void => {
    ref.current.setAttribute('aria-expanded', 'false')
    ref.current.classList.remove(EXPANDED_CLASS)
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

      <button
        aria-label='Close more info'
        onClick={handleClose}
        className={`popover__close ${
          expanded ? 'popover__close--expanded' : ''
        }`}
      >
        <svg
          aria-label='Close more info'
          className='popover__close-svg'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 12 13'
        >
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.331 2.478a1 1 0 00-1.414-1.414L6 4.98 2.083 1.064A1 1 0 00.67 2.478l3.917 3.917L.669 10.31a1 1 0 101.414 1.415L6 7.809l3.917 3.917a1 1 0 001.414-1.415L7.414 6.395l3.917-3.917z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <PopoverOverlay expanded={expanded} onClose={handleClose} />
    </>
  )
})

export default PopoverButton
