import React from 'react'

export default ({
  id,
  activeKeyMomentId,
  comment
}) => (
  <li className={activeKeyMomentId === id ? 'active' : 'non-active'}>
    {comment}
  </li>
)
