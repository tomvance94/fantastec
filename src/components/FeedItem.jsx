import React from 'react'

function buildClassString (id, activeKeyMomentId) {
  let classes = ['LiveFeed__item', 'cf']
  if (id === activeKeyMomentId) classes.push('active')

  return classes.join(' ')
}

export default ({
  id,
  interval,
  activeKeyMomentId,
  comment
}) => (
  <li className={buildClassString(id, activeKeyMomentId)}>
    <span>{interval}</span>
    <p>{comment}</p>
  </li>
)
