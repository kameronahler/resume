import React from 'react'

const AppExternalLinks = () => {
  return (
    <div className='flex justify-between max-w-screen-letter my-4 mx-auto px-8'>
      <a
        className='flex mr-4 text-text'
        href='https://github.com/kameronahler/resume'
        target='_blank'
      >
        <span className='hidden sm:inline'>View on GitHub&nbsp;</span>
        <svg
          className='h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
        >
          <path
            fill='currentColor'
            d='M256 32C132.3 32 32 134.9 32 261.7a229.3 229.3 0 00153.2 217.9c1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4l-.3-39.1c-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6a84.6 84.6 0 012.2-60.8s1.6-.5 5-.5c8.1 0 26.4 3.1 56.6 24.1a209.8 209.8 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5a84.6 84.6 0 012.2 60.8 90.3 90.3 0 0123 61.6c0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4A229.2 229.2 0 00480 261.7C480 134.9 379.7 32 256 32z'
          />
        </svg>
      </a>
      <a
        className='app-header__external-link'
        href='https://kamerondesigns.com'
        target='_blank'
      >
        kamerondesigns.com
      </a>
    </div>
  )
}

export default AppExternalLinks