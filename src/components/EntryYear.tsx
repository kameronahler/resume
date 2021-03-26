import React from 'react'

import { PropsEntryYear } from './Types'

const EntryYear = ({ dateEnd, dateStart }: PropsEntryYear) => {
  const getYearRange = (end: string, start: string): string =>
    end === start ? `${end}` : `${end} – ${start}`

  const yearRange = getYearRange(
    dateEnd.substring(0, 4),
    dateStart.substring(0, 4)
  )

  return <p>{yearRange}</p>
}

export default EntryYear
