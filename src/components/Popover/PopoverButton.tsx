import React, { useState, forwardRef } from 'react'
import PopoverOverlay from './PopoverOverlay'

const PopoverButton = forwardRef((props, ref) => {
  const [expanded, setExpanded] = useState(false)

  const handleOpen = () => {
    ref.current.setAttribute('aria-expanded', 'true')
    ref.current.classList.remove('hidden')
    setExpanded(true)
  }

  const handleClose = () => {
    ref.current.setAttribute('aria-expanded', 'false')
    ref.current.classList.add('hidden')
    setExpanded(false)
  }

  return (
    <>
      <button onClick={handleOpen}>{props.children}</button>
      <PopoverOverlay expanded={expanded} onClose={handleClose} />
    </>
  )
})

export default PopoverButton
