import React from 'react'

import { InterfaceContentfulPost } from '../components/Types'
import Entry from '../Components/Entry'

const useGetListJSX = ({
  posts,
  heading,
}: {
  posts: object[] | unknown[]
  heading: string
}) =>
  posts.map((post: InterfaceContentfulPost) => {
    const entryProps = {
      listJSON: null,
    }

    if (post.fields.listJSON !== undefined) {
      entryProps.listJSON = post.fields.listJSON

      return (
        <div key={post.sys.id} className='mb-5 last:mb-0 letter:mb-0'>
          <h3 className='letter:hidden'>{heading}</h3>
          <Entry {...entryProps} />
        </div>
      )
    } else {
      return <></>
    }
  })

export default useGetListJSX
