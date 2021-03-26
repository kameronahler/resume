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
      return <Entry key={post.sys.id} {...entryProps} />
    })

    return jsx
  }

  if (skillsPosts.length) {
    const jsxToRender = getJSX()
    return <>{jsxToRender}</>
  } else {
    return <></>
  }
}

export default ToolsEntries
