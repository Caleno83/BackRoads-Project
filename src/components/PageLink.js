import React from 'react'

const PageLink = ({ link, itemClass, href, text }) => {
  return (
    <li key={link.id}>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  )
}

export default PageLink
