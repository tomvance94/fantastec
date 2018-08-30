import React from 'react'

import LiveFeed from '../components/LiveFeed'
import KeyMoments from '../components/KeyMoments'
import MockFeed from '../feed'

class CommentaryContainer extends React.PureComponent {
  constructor () {
    super()

    this.state = {
      feed: MockFeed.feed,
      activeKeyMoment: null
    }

    this.activateKeyMoment = this.activateKeyMoment.bind(this)
  }

  activateKeyMoment (eventId) {
    this.setState({
      activeKeyMoment: eventId
    })
  }

  render () {
    return (
      <div>
        <LiveFeed
          feed={this.state.feed}
          activeKeyMomentId={this.state.activeKeyMoment}
        />
        <KeyMoments
          feed={this.state.feed}
          activateKeyMoment={this.activateKeyMoment}
        />
      </div>
    )
  }
}

export default CommentaryContainer
