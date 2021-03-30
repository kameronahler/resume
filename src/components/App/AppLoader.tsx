import React from 'react'

const AppLoader = () => {
  return (
    <div className='app-loader'>
      <div className='app-loader__grid'>
        <header className='app-loader__header'>
          <h1 className='col-span-full truncate'>Loading</h1>
          <div className='app-loader__item h-8 col-span-6'></div>
          <div className='app-loader__item h-8 col-span-8'></div>
        </header>
        <div className='app-loader__content'>
          <div className='app-loader__item col-span-full'></div>
          <div className='app-loader__item col-span-full'></div>
          <div className='app-loader__item col-span-full'></div>
          <div className='app-loader__item col-span-full'></div>
        </div>
      </div>
    </div>
  )
}

export default AppLoader
