import React from 'react'
import { EntryProps } from './Types'
import EntryYear from './EntryYear'

const Entry = ({
  dateEnd,
  dateStart,
  description,
  list,
  title,
}: EntryProps) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      {dateEnd && dateStart && <EntryYear dateEnd={dateEnd} dateStart={dateStart} />}
    </div>

      {/* {list && (
        <ul>
          {list.map((listItem, i) => {
            return <li key={i}>{listItem.content[0].content[0].value}</li>
          })}
        </ul>
      )} */}
  )
}

export default Entry
