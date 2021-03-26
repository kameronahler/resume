import React, { useState, useEffect } from 'react'
import { ContentfulPostsArr } from './Types'
import { createClient } from 'contentful'
import Entry from './Entry'

const CONTENTFUL_SPACE = process.env.CONTENTFUL_SPACE
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

const contentfulClient = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
  space: CONTENTFUL_SPACE,
})

const Entries = () => {
  const [contentfulPosts, setContentfulPosts] = useState<ContentfulPostsArr>(
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
        mounted = false
        setContentfulPosts(res.items)
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchContentful()
    }
    fetchDataAsync()
  }, [])

  let jsx = [<p key={'loading'}>Loading</p>]

  if (contentfulPosts) {
    jsx = contentfulPosts.map(post => {
      const entry = post.fields

      const entryProps = {
        description: null,
        dateStart: null,
        dateEnd: null,
        listJSON: null,
        title: null,
      }

      Object.keys(entryProps).forEach(key => {
        if (entry[key] !== undefined) {
          entryProps[key] = entry[key]
        }
      })
      return <Entry key={post.sys.id} {...entryProps} />
    })
  }
  return <>{jsx}</>
}

export default Entries
