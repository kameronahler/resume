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
    <section className='mb-8 last:mb-0'>
      {title && (
        <header>
          <h3>{title}</h3>
        </header>
      )}
      <div>
        {description && <p>{description}</p>}
        {listJSON && <EntryList listJSON={listJSON} />}
      </div>
      <div>
        {dateEnd && dateStart && (
          <EntryYear dateEnd={dateEnd} dateStart={dateStart} />
        )}
      </div>
    </section>
  )
}

export default Entry
