import React from 'react'

import { PropsEntryList } from './Types'

const EntryList = ({ listJSON }: PropsEntryList) => {
  return (
    <ul>
      {listJSON.list.map((item, i) => {
        return <li key={i}>{item}</li>
      })}
      <li></li>
    </ul>
  )
}

export default EntryList
