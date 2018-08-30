import React from 'react'

export default ({
  id,
  interval,
  activeKeyMomentId,
  comment
}) => (
  <li
    className={
      activeKeyMomentId === id ? 'active LiveFeed__item cf' : 'non-active LiveFeed__item cf'
    }
  >
    <span>{interval}</span>
    <p>{comment}</p>
  </li>
)
