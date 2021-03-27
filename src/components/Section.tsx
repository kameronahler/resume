import React from 'react'
import { PropsSection } from './Types'

const Section: React.FC<PropsSection> = ({ children, heading }) => {
  return (
    <section className='grid grid-cols-12 mb-9 last:mb-0'>
      <header className='col-span-3'>
        <h2>{heading}</h2>
      </header>
      <div className='col-span-9'>{children}</div>
    </section>
  )
}

export default Section
