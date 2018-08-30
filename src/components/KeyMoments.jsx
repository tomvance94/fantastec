import React from 'react'

export default ({
  feedItems
}) => (
  <div>
    <h1>Live Commentary</h1>
    <ul>
      {feedEvents.map(event => {
        if (event.isKeyMoment) return <KeyMoment {...event} />
      })}
    </ul>
  </div>
)

