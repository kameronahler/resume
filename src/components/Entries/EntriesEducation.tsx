import React from 'react'

import { TypeContentfulPosts, InterfaceContentfulPost } from '../../store/Types'
import useFilterPostsByTag from '../../hooks/useFilterPostsByTag'
import Entry from '../Entry/Entry'

const EntriesEducation = ({
  contentfulPosts,
}: {
  contentfulPosts: TypeContentfulPosts
}) => {
  const educationPosts = useFilterPostsByTag(contentfulPosts, 'education')

  const getJSX = () => {
    const jsx = educationPosts.map((post: InterfaceContentfulPost) => {
      const entryProps = {
        description: null,
        popoverText: null,
        title: null,
      }
      Object.keys(entryProps).forEach(key => {
        if (post.fields[key] !== undefined) {
          entryProps[key] = post.fields[key]
        }
      })

      return (
        <div key={post.sys.id} className='mb-5 last:mb-0 letter:mb-9'>
          <Entry {...entryProps} />
        </div>
      )
    })
    return jsx
  }

  if (educationPosts.length) {
    const jsxToRender = getJSX()
    return <>{jsxToRender}</>
  } else {
    return <></>
  }
}

export default EntriesEducation
