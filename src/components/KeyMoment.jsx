import React from 'react'

export default ({
  id,
  interval,
  eventType,
  onClick
}) => (
  <li className='KeyMoments__item' onClick={onClick}>
    <span>{interval}</span>
    <p>{eventType}</p>
  </li>
)
