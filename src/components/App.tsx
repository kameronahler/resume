import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'

import { TypeContentfulPosts } from './Types'
import Header from './Header'
import Section from './Section'
import ExperienceEntries from './ExperienceEntries'
import SkillsEntries from './SkillsEntries'
import ToolsEntries from './ToolsEntries'

// contentful statics
const CONTENTFUL_SPACE = process.env.CONTENTFUL_SPACE
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN
const contentfulClient = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
  space: CONTENTFUL_SPACE,
})

const App = () => {
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

  if (contentfulPosts) {
    return (
      <div className='flex min-h-full'>
        <div className='bg-bg m-auto max-w-letter pb-8 pt-10 px-8'>
          <Header />
          <Section heading='Experience'>
            <ExperienceEntries contentfulPosts={contentfulPosts} />
          </Section>
          <Section heading='Skills'>
            <SkillsEntries contentfulPosts={contentfulPosts} />
          </Section>
          <Section heading='Tools'>
            <ToolsEntries contentfulPosts={contentfulPosts} />
          </Section>
        </div>
      </div>
    )
  } else {
    return <p key={'loading'}>Loading</p>
  }
}

export default App
