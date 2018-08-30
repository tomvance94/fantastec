import React from 'react'

import LiveFeed from '../components/LiveFeed'
import KeyMoments from '../components/KeyMoments'

class CommentaryContainer extends React.PureComponent {
  render () {
    return (
      <div>
        <LiveFeed />
        <KeyMoments />
      </div>
    )
  }
}

export default CommentaryContainer
