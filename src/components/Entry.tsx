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
    <section className='last:mb-0 letter:gap-x-4 letter:grid letter:grid-cols-9 letter:mb-8'>
      {title && (
        <header className='letter:col-span-full'>
          <h3>{title}</h3>
        </header>
      )}
      <div
        className={
          dateEnd && dateStart ? 'letter:col-span-8' : 'letter:col-span-full'
        }
      >
        {description && <p>{description}</p>}
        {listJSON && <EntryList listJSON={listJSON} />}
      </div>
      <div className='letter:col-span-1 letter:justify-self-end'>
        {dateEnd && dateStart && (
          <EntryYear dateEnd={dateEnd} dateStart={dateStart} />
        )}
      </div>
    </section>
  )
}

export default Entry
