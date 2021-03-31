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

  return expanded
    ? createPortal(
        <div
          aria-label='Close more info'
          className='popover__overlay'
          id='popover-overlay'
          onClick={onClose}
        ></div>,
        document.getElementById('app')
      )
    : null
}
export default PopoverOverlay
