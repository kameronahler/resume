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
    <section className='entry'>
      {title && (
        <header className='entry__header'>
          <h3>{title}</h3>
        </header>
      )}
      <div
        className={`entry__content ${
          dateEnd && dateStart ? '' : 'entry__content--without-date'
        }`}
      >
        {description && <p>{description}</p>}
        {listJSON && <EntryList listJSON={listJSON} />}
      </div>
      <div className='entry__date'>
        {dateEnd && dateStart && (
          <EntryYear dateEnd={dateEnd} dateStart={dateStart} />
        )}
      </div>
    </section>
  )
}

export default Entry
