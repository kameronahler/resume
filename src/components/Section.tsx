import React from 'react'
import { PropsSection } from './Types'

const Section: React.FC<PropsSection> = ({ children, heading }) => {
  return (
    <section>
      <header>
        <h2>{heading}</h2>
      </header>
      <div>{children}</div>
    </section>
  )
}

export default Section
