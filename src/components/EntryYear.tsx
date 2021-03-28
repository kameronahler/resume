import React from 'react'

import { PropsEntryYear } from './Types'

const EntryYear = ({ dateEnd, dateStart }: PropsEntryYear) => {
  const end = dateEnd.substring(0, 4)
  const start = dateStart.substring(0, 4)

  return (
    <p>
      {end === start ? (
        <strong>{end}</strong>
      ) : (
        <strong>
          {start}&nbsp;–
          <br />
          {end}
        </strong>
      )}
    </p>
  )
}

export default EntryYear
