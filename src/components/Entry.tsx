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
  const hasDate = dateEnd && dateStart

  return (
    <section className='entry'>
      {title && (
        <header>
          <h3 className='entry__heading'>{title}</h3>
        </header>
      )}
      <div className='entry__content'>
        {hasDate && (
          <div className='entry__date'>
            <EntryYear dateEnd={dateEnd} dateStart={dateStart} />
          </div>
        )}
        {description && (
          <p
            className={`entry__description ${
              hasDate ? '' : 'entry__description--without-date'
            }`}
          >
            {description}
          </p>
        )}
        {listJSON && (
          <div
            className={`entry__list ${
              hasDate ? '' : 'entry__list--without-date'
            }`}
          >
            <EntryList listJSON={listJSON} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Entry
