import React from 'react'

import { InterfaceContentfulPost } from '../store/Types'
import Entry from '../components/Entry/Entry'

const useGetListJSX = ({
  posts,
  heading,
  headingDesktopHidden,
}: {
  posts: object[] | unknown[]
  heading: string
  headingDesktopHidden?: boolean
}) =>
  posts.map((post: InterfaceContentfulPost) => {
    const entryProps = {
      listJSON: null,
      title: heading,
      titleDesktopHidden: headingDesktopHidden,
    }

    if (post.fields.listJSON !== undefined) {
      entryProps.listJSON = post.fields.listJSON

      return (
        <div key={post.sys.id} className='mb-5 last:mb-0 letter:mb-0'>
          <Entry {...entryProps} />
        </div>
      )
    } else {
      return <></>
    }
  })

export default useGetListJSX
