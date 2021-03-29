import React from 'react'

import { TypeContentfulPosts, InterfaceContentfulPost } from '../../store/Types'
import Entry from '../Entry/Entry'
import useFilterPostsByTag from '../../hooks/useFilterPostsByTag'

const EntriesExperience = ({
  contentfulPosts,
}: {
  contentfulPosts: TypeContentfulPosts
}) => {
  const experiencePosts = useFilterPostsByTag(contentfulPosts, 'experience')

  const getJSX = () => {
    const jsx = experiencePosts.map((post: InterfaceContentfulPost) => {
      const entryProps = {
        description: null,
        dateEnd: null,
        dateStart: null,
        listJSON: null,
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

  if (experiencePosts.length) {
    const jsxToRender = getJSX()
    return <>{jsxToRender}</>
  } else {
    return <></>
  }
}

export default EntriesExperience
