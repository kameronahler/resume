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
    <section className='gap-x-4 grid grid-cols-9 mb-8 last:mb-0'>
      {title && (
        <header className='col-span-full'>
          <h3>{title}</h3>
        </header>
      )}
      <div className={dateEnd && dateStart ? 'col-span-8' : 'col-span-full'}>
        {description && <p>{description}</p>}
        {listJSON && <EntryList listJSON={listJSON} />}
      </div>
      <div className='col-span-1 justify-self-end'>
        {dateEnd && dateStart && (
          <EntryYear dateEnd={dateEnd} dateStart={dateStart} />
        )}
      </div>
    </section>
  )
}

export default Entry
