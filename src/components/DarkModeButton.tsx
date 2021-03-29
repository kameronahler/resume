import React, { useRef } from 'react'

const DarkModeButton = () => {
  const switchHandle = useRef(null)

  const handleClick = () => {
    document.body.classList.toggle('dark-mode')
    switchHandle.current.classList.toggle(
      'darkmode-button__switch-handle--enabled'
    )
  }

  return (
    <>
      <button onClick={handleClick} className='darkmode-button'>
        <span
          ref={switchHandle}
          className='darkmode-button__switch-handle'
        ></span>
      </button>
    </>
  )
}

export default DarkModeButton
