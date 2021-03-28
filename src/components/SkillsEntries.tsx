import React from 'react'

import { TypeContentfulPosts, InterfaceContentfulPost } from './Types'
import Entry from './Entry'
import useFilterPostsByTag from '../hooks/useFilterPostsByTag'

const ToolsEntries = ({
  contentfulPosts,
}: {
  contentfulPosts: TypeContentfulPosts
}) => {
  const skillsPosts = useFilterPostsByTag(contentfulPosts, 'skills')
  const getJSX = () => {
    const jsx = skillsPosts.map((post: InterfaceContentfulPost) => {
      const entryProps = {
        listJSON: null,
      }
      if (post.fields.listJSON !== undefined) {
        entryProps.listJSON = post.fields.listJSON
      }
      return (
        <div className='mb-5 last:mb-0 letter:mb-0'>
          <Entry key={post.sys.id} {...entryProps} />
        </div>
      )
    })

    return jsx
  }

  if (skillsPosts.length) {
    const jsxToRender = getJSX()
    return (
      <div className='letter:gap-x-4 letter:grid letter:grid-cols-2'>
        {jsxToRender}
      </div>
    )
  } else {
    return <></>
  }
}

export default ToolsEntries
