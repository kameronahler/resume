import React from 'react'
import { PropsSection } from './Types'

const Section: React.FC<PropsSection> = ({ children, heading }) => {
  return (
    <section className='section'>
      <header className='section__header'>
        <h2>
          <span className='section__heading'>{heading}</span>
        </h2>
      </header>
      <div className='section__content'>{children}</div>
    </section>
  )
}

export default Section
