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
    // sort
    experiencePosts.sort((a, b) => (a.fields.order > b.fields.order ? 1 : -1))

    const jsx = experiencePosts.map((post: InterfaceContentfulPost) => {
      const entryProps = {
        description: null,
        dateEnd: null,
        dateStart: null,
        listJSON: null,
        order: null,
        popoverText: null,
        title: null,
      }

      Object.keys(entryProps).forEach(key => {
        if (post.fields[key] !== undefined) {
          entryProps[key] = post.fields[key]
        }
      })

      return (
        <div
          key={post.sys.id}
          className='py-4 first:pt-0 last:pb-0 letter:py-5'
        >
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
