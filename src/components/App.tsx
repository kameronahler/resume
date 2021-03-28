import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'

import { TypeContentfulPosts } from './Types'
import EducationEntries from './EducationEntries'
import ExperienceEntries from './ExperienceEntries'
import Header from './Header'
import Section from './Section'
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
      <div className='min-h-full letter:flex'>
        <div className='app'>
          <svg
            aria-hidden='true'
            className='app__bg app__bg--top'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 504 151'
          >
            <path d='M0 .502h504v97.646c0 8.376-6.46 15.335-14.813 15.956L0 150.502v-150z' />
          </svg>
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
          <Section heading='Education'>
            <EducationEntries contentfulPosts={contentfulPosts} />
          </Section>
          <svg
            aria-hidden='true'
            className='app__bg app__bg--bottom'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 313 139'
          >
            <path d='M313 139H0V45.598c0-8.224 6.234-15.108 14.418-15.921L313 0v139z' />
          </svg>
        </div>
      </div>
    )
  } else {
    return <p key={'loading'}>Loading</p>
  }
}

export default App
