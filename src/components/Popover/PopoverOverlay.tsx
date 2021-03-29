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
        ></div>,
        document.getElementById('app')
      )
}
export default PopoverOverlay
