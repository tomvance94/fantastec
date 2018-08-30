import React from 'react'

export default ({
  id,
  comment
}) => (
  <li key={id} >
    {comment}
  </li>
)