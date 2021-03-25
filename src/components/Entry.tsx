import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'

const CONTENTFUL_SPACE = process.env.CONTENTFUL_SPACE
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

const Entry = () => {
  const contentfulClient = createClient({
    accessToken: CONTENTFUL_ACCESS_TOKEN,
    environment: 'master',
    space: CONTENTFUL_SPACE,
  })
  const [contentfulPosts, setContentfulPosts] = useState(null)

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

  return <p>{JSON.stringify(contentfulPosts)}</p>
}

export default Entry
