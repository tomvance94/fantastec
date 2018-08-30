import React from 'react'

import LiveFeed from '../components/LiveFeed'
import KeyMoments from '../components/KeyMoments'
import MockFeed from '../feed'

class CommentaryContainer extends React.PureComponent {
  constructor () {
    super()

    this.state = {
      feed: MockFeed.feed
    }
  }

  render () {
    return (
      <div>
        <LiveFeed feed={this.state.feed} />
        {/* <KeyMoments feed={this.state.feed} /> */}
      </div>
    )
  }
}

export default CommentaryContainer
