import React from 'react'

import { TypeContentfulPosts, InterfaceContentfulPost } from './Types'
import Entry from './Entry'
import useFilterPostsByTag from '../hooks/useFilterPostsByTag'

const ToolsEntries = ({
  contentfulPosts,
}: {
  contentfulPosts: TypeContentfulPosts
}) => {
  const toolsPosts = useFilterPostsByTag(contentfulPosts, 'tools')
  const getJSX = () => {
    const jsx = toolsPosts.map((post: InterfaceContentfulPost) => {
      const entryProps = {
        listJSON: null,
      }
      if (post.fields.listJSON !== undefined) {
        entryProps.listJSON = post.fields.listJSON
      }
      return (
        <div className='mb-8 last:mb-0 letter:mb-0'>
          <Entry key={post.sys.id} {...entryProps} />
        </div>
      )
    })

    return jsx
  }

  if (toolsPosts.length) {
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
