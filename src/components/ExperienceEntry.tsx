import React from 'react'

import { PropsEntry } from './Types'
import EntryYear from './ExperienceEntryYear'
import EntryList from './ExperienceEntryList'

const ExperienceEntry = ({
  dateEnd,
  dateStart,
  description,
  listJSON,
  title,
}: PropsEntry) => {
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

export default ExperienceEntry
