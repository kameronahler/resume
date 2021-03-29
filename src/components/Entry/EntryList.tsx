import React from 'react'

import { PropsEntryList } from '../../store/Types'

const EntryList = ({ listJSON }: PropsEntryList) => {
  return (
    <ul className='entry-list'>
      {listJSON.list.map((item, i) => {
        return (
          <li className='entry-list__item' key={i}>
            <svg
              aria-hidden='true'
              className='entry-list__item-bullet'
              fill='none'
              viewBox='0 0 4 4'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='2' cy='2' r='1.5' />
            </svg>
            <span>{item}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default EntryList
