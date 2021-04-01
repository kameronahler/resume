import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'

import { TypeContentfulPosts } from '../../store/types'
import AppExternalLinks from './AppExternalLinks'
import AppHeader from './AppHeader'
import AppLoader from './AppLoader'
import AppSection from './AppSection'
import Education from '../Entries/Education'
import Experience from '../Entries/Experience'
import Skills from '../Entries//Skills'
import Tools from '../Entries//Tools'

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
          <div className='letter:pb-20 letter:px-8'>
            <AppExternalLinks />
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
                <Experience contentfulPosts={contentfulPosts} />
              </AppSection>
              <AppSection heading='Skills'>
                <Skills contentfulPosts={contentfulPosts} />
              </AppSection>
              <AppSection heading='Tools'>
                <Tools contentfulPosts={contentfulPosts} />
              </AppSection>
              <AppSection heading='Education'>
                <Education contentfulPosts={contentfulPosts} />
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
