import React from 'react'
import { createPortal } from 'react-dom'

const PopoverOverlay = ({ expanded, onClose }) => {
  return !expanded
    ? null
    : createPortal(
        <div
          id='popover-overlay'
          onClick={onClose}
          className='bg-white fixed h-screen left-0 opacity-50 top-0 w-screen z-20'
        ></div>,
        document.querySelector('#app')
      )
}
export default PopoverOverlay
