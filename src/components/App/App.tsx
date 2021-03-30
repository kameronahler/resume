import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'

import { TypeContentfulPosts } from '../../store/Types'
import EntriesEducation from '../Entries/EntriesEducation'
import EntriesExperience from '../Entries/EntriesExperience'
import EntriesSkills from '../Entries//EntriesSkills'
import EntriesTools from '../Entries//EntriesTools'
import AppHeader from './AppHeader'
import AppSection from './AppSection'
import AppLoader from './AppLoader'

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

  return (
    <>
      {contentfulPosts ? (
        <>
          <div className='letter:pb-20 letter:pt-8 letter:px-8'>
            <div id='app' className='app'>
              <svg
                aria-hidden='true'
                className='app__bg app__bg--top'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 504 151'
              >
                <path d='M0 .502h504v113.651c0 8.577-6.764 15.629-15.334 15.986L0 150.502v-150z' />
              </svg>
              <AppHeader />
              <AppSection heading='Experience'>
                <EntriesExperience contentfulPosts={contentfulPosts} />
              </AppSection>
              <AppSection heading='Skills'>
                <EntriesSkills contentfulPosts={contentfulPosts} />
              </AppSection>
              <AppSection heading='Tools'>
                <EntriesTools contentfulPosts={contentfulPosts} />
              </AppSection>
              <AppSection heading='Education'>
                <EntriesEducation contentfulPosts={contentfulPosts} />
              </AppSection>
              <svg
                aria-hidden='true'
                className='app__bg app__bg--bottom'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 313 123'
              >
                <path d='M313 122.395l-313-.001v-92.59c0-8.558 6.735-15.601 15.285-15.984L313 .502v121.893z' />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <AppLoader />
      )}
    </div>
  )
}

export default App
