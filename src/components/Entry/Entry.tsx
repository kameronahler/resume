import React, { useRef } from 'react'
import ReactMarkdown from 'react-markdown'

import { PropsEntry } from '../../store/types'
import EntryYear from './EntryYear'
import EntryList from './EntryList'
import Popover from '../Popover/Popover'

const Entry = ({
  dateEnd,
  dateStart,
  description,
  listJSON,
  popoverText,
  title,
  titleDesktopHidden,
}: PropsEntry) => {
  const targettedRef = useRef<HTMLDivElement>(null)

  const hasDate = dateEnd && dateStart
  return (
    <section className='entry'>
      {title && (
        <header className='relative'>
          {popoverText ? (
            <>
              <Popover ref={targettedRef}>
                <h3
                  className={`entry__heading popover__button-inner ${
                    titleDesktopHidden ? 'entry__heading--desktop-hidden' : ''
                  }`}
                >
                  {title}
                </h3>
              </Popover>
              <div
                aria-expanded='false'
                ref={targettedRef}
                className='popover__content popover__content--markdown'
              >
                <ReactMarkdown source={`${popoverText}`} />
              </div>
            </>
          ) : (
            <h3
              className={`entry__heading popover__button-inner ${
                titleDesktopHidden ? 'entry__heading--desktop-hidden' : ''
              }`}
            >
              {title}
            </h3>
          )}
        </header>
      )}
      <div className='entry__content'>
        {hasDate && (
          <div className='entry__date'>
            <EntryYear dateEnd={dateEnd} dateStart={dateStart} />
          </div>
        )}
        {description && (
          <p
            className={`entry__description ${
              hasDate ? '' : 'entry__description--without-date'
            }`}
          >
            {description}
          </p>
        )}
        {listJSON && (
          <div
            className={`entry__list ${
              hasDate ? '' : 'entry__list--without-date'
            }`}
          >
            <EntryList listJSON={listJSON} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Entry
