import React, { useState, useEffect, forwardRef } from 'react'

const PopoverButton = forwardRef((props, ref) => {
  const [expanded, setExpanded] = useState(false)

  const clickHandler = () => {
    if (ref.current.getAttribute('aria-expanded') === 'false') {
      ref.current.classList.remove('hidden')
      ref.current.setAttribute('aria-expanded', 'true')
      setExpanded(true)
    } else {
      ref.current.classList.add('hidden')
      ref.current.setAttribute('aria-expanded', 'false')
      setExpanded(false)
    }
  }

  useEffect(() => {
    if (expanded) {
      document.body.classList.add('opacity-50')
    } else {
      document.body.classList.remove('opacity-50')
    }
    return
  })

  return <button onClick={clickHandler}>{props.children}</button>
})

export default PopoverButton
