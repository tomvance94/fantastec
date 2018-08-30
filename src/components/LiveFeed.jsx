import React from 'react'
import FeedItem from './FeedItem'

export default ({
  feed,
  activeKeyMomentId
}) => (
  <div className="LiveFeed">
    <h1 className="LiveFeed__title">Live Commentary</h1>
    <ul className="LiveFeed__list">
      {feed.map(event => (
        <FeedItem
          key={event.id}
          activeKeyMomentId={activeKeyMomentId}
          {...event}
        />
      ))}
    </ul>
  </div>
)
