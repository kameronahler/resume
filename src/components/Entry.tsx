import React from 'react'
import { EntryProps } from './Types'
import EntryYear from './EntryYear'
import EntryList from './EntryList'

const Entry = ({
  dateEnd,
  dateStart,
  description,
  listJSON,
  title,
}: EntryProps) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      {dateEnd && dateStart && (
        <EntryYear dateEnd={dateEnd} dateStart={dateStart} />
      )}
      {listJSON && <EntryList listJSON={listJSON} />}
    </div>
  )
}

export default Entry
