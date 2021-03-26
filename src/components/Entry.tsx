import React from 'react'

import { PropsEntry } from './Types'
import EntryYear from './EntryYear'
import EntryList from './EntryList'

const Entry = ({
  dateEnd,
  dateStart,
  description,
  listJSON,
  title,
}: PropsEntry) => {
  return (
    <div>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {dateEnd && dateStart && (
        <EntryYear dateEnd={dateEnd} dateStart={dateStart} />
      )}
      {listJSON && <EntryList listJSON={listJSON} />}
    </div>
  )
}

export default Entry
