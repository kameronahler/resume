import React from 'react'

import { PropsEntryYear } from '../../store/types'

const EntryYear = ({ dateEnd, dateStart }: PropsEntryYear) => {
  const end = dateEnd.substring(0, 4)
  const start = dateStart.substring(0, 4)

  return (
    <p>
      {end === start ? (
        <strong>{end}</strong>
      ) : (
        <strong>
          <span className='tracking-wider'>{end}</span>
          <span>&nbsp;–</span>
          <span className='letter:hidden'>&nbsp;</span>
          <span className='tracking-wider letter:block'>{start}</span>
        </strong>
      )}
    </p>
  )
}

export default EntryYear
