import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

const PopoverOverlay = ({ expanded, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        onClose()
      }
    })
  })
  return !expanded
    ? null
    : createPortal(
        <div
          aria-label='Close more info'
          className='popover__overlay'
          id='popover-overlay'
          onClick={onClose}
          role='button'
        >
          <button className='popover__button-close'>
            <svg
              aria-label='Close more info'
              className='popover__button-close-svg'
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
        </div>,
        document.getElementById('app')
      )
}
export default PopoverOverlay
