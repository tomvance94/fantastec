import React from 'react'
import FeedItem from './FeedItem'

export default ({
  feed
}) => (
  <div>
    <h1>Live Commentary</h1>
    <ul>
      {feed.map(event => (
        <FeedItem key={event.id}  {...event} />
      ))}
    </ul>
  </div>
)
