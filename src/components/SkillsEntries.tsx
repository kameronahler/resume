import React from 'react'

import { TypeContentfulPosts } from './Types'
import useFilterPostsByTag from '../hooks/useFilterPostsByTag'
import useGetListJSX from '../hooks/useGetListJSX'

const ToolsEntries = ({
  contentfulPosts,
}: {
  contentfulPosts: TypeContentfulPosts
}) => {
  const designJSX = useGetListJSX({
    posts: useFilterPostsByTag(contentfulPosts, 'skillsDesign'),
    heading: 'Design',
    headingDesktopHidden: true,
  })
  const devJSX = useGetListJSX({
    posts: useFilterPostsByTag(contentfulPosts, 'skillsDev'),
    heading: 'Dev',
    headingDesktopHidden: true,
  })

  return (
    <div className='letter:gap-x-4 letter:grid letter:grid-cols-2'>
      {designJSX}
      {devJSX}
    </div>
  )
}

export default ToolsEntries
