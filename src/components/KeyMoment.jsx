import React from 'react'

export default ({
  id,
  eventType,
  onClick
}) => (
  <li onClick={onClick}>
    {eventType}
  </li>
)
