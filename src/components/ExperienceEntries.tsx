import React from 'react'

import { TypeContentfulPosts, InterfaceContentfulPost } from './Types'
import Entry from './Entry'
import useFilterPostsByTag from '../hooks/useFilterPostsByTag'

const ExperienceEntries = ({
  contentfulPosts,
}: {
  contentfulPosts: TypeContentfulPosts
}) => {
  const experiencePosts = useFilterPostsByTag(contentfulPosts, 'experience')

  const getJSX = () => {
    const jsx = experiencePosts.map((post: InterfaceContentfulPost) => {
      const entryProps = {
        description: null,
        dateStart: null,
        dateEnd: null,
        listJSON: null,
        title: null,
      }

      Object.keys(entryProps).forEach(key => {
        if (post.fields[key] !== undefined) {
          entryProps[key] = post.fields[key]
        }
      })

      return <Entry key={post.sys.id} {...entryProps} />
    })

    return jsx
  }

  if (experiencePosts) {
    const jsxToRender = getJSX()
    return <>{jsxToRender}</>
  } else {
    return <p key={'loading'}>Loading</p>
  }
}

export default ExperienceEntries
