import React from 'react'
import { EntryProps } from './Types'

const Entry = ({
  dateEnd,
  dateStart,
  description,
  list,
  title,
}: EntryProps) => {
  const getYearRange = (end: string, start: string) =>
    end === start ? `${end}` : `${end} – ${start}`

  let yearRange = null

  if (dateEnd && dateStart) {
    yearRange = getYearRange(dateEnd.substring(0, 4), dateStart.substring(0, 4))
  }

  return (
    <div>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      {list && (
        <ul>
          {list.map((listItem, i) => {
            return <li key={i}>{listItem.content[0].content[0].value}</li>
          })}
        </ul>
      )}
      {yearRange && <p>{yearRange}</p>}
    </div>
  )
}

export default Entry
