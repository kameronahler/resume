import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'

import { TypeContentfulPosts } from './Types'
import Entry from './Entry'

// contentful statics
const CONTENTFUL_SPACE = process.env.CONTENTFUL_SPACE
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN
const contentfulClient = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
  space: CONTENTFUL_SPACE,
})

const Entries = () => {
  const [contentfulPosts, setContentfulPosts] = useState<TypeContentfulPosts>(
    null
  )

  const fetchContentful = async () => {
    // not sure what contentful's unsub strategy is at the moment, so using
    // this local state to know if we need to update state after request resolves
    let mounted = true

    try {
      const res = await contentfulClient.getEntries({
        content_type: 'resumeItem',
      })

      if (mounted) {
        setContentfulPosts(res.items)
      }
    } catch (err) {
      throw new Error(err)
    }

    mounted = false
  }

  useEffect(() => {
    const lambdaContentful = async () => {
      await fetchContentful()
    }
    lambdaContentful()
  }, [])

  // render
  const getJSX = () => {
    const jsx = contentfulPosts.map(post => {
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

  if (contentfulPosts) {
    const jsxToRender = getJSX()
    return <>{jsxToRender}</>
  } else {
    return <p key={'loading'}>Loading</p>
  }
}

export default Entries
