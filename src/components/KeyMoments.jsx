import React from 'react'
import KeyMoment from './KeyMoment'

export default ({
  feed
}) => (
  <div>
    <h1>Key Moments</h1>
    <ul>
      {feed.map(event => {
        if (event.isKeyMoment) return <KeyMoment key={event.id} {...event} />
        return null
      })}
    </ul>
  </div>
)

