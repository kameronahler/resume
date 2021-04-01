import React from 'react'

import { TypeContentfulPosts } from '../../store/types'
import useFilterPostsByTag from '../../hooks/useFilterPostsByTag'
import useGetListJSX from '../../hooks/useGetListJSX'

const Skills = ({
  contentfulPosts,
}: {
  contentfulPosts: TypeContentfulPosts
}) => {
  const designJSX = useGetListJSX({
    posts: useFilterPostsByTag(contentfulPosts, 'skillsDesign'),
    heading: 'Design',
  })
  const devJSX = useGetListJSX({
    posts: useFilterPostsByTag(contentfulPosts, 'skillsDev'),
    heading: 'Dev',
  })

  return (
    <div className='letter:gap-x-4 letter:grid letter:grid-cols-2'>
      {designJSX}
      {devJSX}
    </div>
  )
}

export default Skills
