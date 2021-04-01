import React from 'react'
import { PropsAppSection } from '../../store/types'

const AppSection: React.FC<PropsAppSection> = ({ children, heading }) => {
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

export default AppSection
