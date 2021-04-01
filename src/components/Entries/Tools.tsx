import React from 'react'

import { TypeContentfulPosts } from '../../store/types'
import useFilterPostsByTag from '../../hooks/useFilterPostsByTag'
import useGetListJSX from '../../hooks/useGetListJSX'

const Tools = ({
  contentfulPosts,
}: {
  contentfulPosts: TypeContentfulPosts
}) => {
  const designJSX = useGetListJSX({
    posts: useFilterPostsByTag(contentfulPosts, 'toolsDesign'),
    heading: 'Design',
    headingDesktopHidden: true,
  })
  const devJSX = useGetListJSX({
    posts: useFilterPostsByTag(contentfulPosts, 'toolsDev'),
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

export default Tools
