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
      return <Entry key={post.sys.id} {...entryProps} />
    })

    return jsx
  }

  if (toolsPosts) {
    const jsxToRender = getJSX()
    return <>{jsxToRender}</>
  } else {
    return <p key={'loading'}>Loading</p>
  }
}

export default ToolsEntries
