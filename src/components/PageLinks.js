import React from 'react'
import { pageLinks } from '../data'
import PageLink from './PageLink'

function PageLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        const { href, text } = link
        return (
          <PageLink
            key={link.id}
            href={href}
            text={text}
            link={link}
            itemClass={itemClass}
          />
        )
      })}
    </ul>
  )
}

export default PageLinks
