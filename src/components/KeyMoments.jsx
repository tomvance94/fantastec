import React from 'react'
import KeyMoment from './KeyMoment'

export default ({
  feed,
  activateKeyMoment
}) => (
  <div className='KeyMoments'>
    <h1 className='KeyMoments__title'>Key Moments</h1>
    <ul className='KeyMoments__list'>
      {feed.map(event => {
        if (event.isKeyMoment) {
          return (
            <KeyMoment
              key={event.id}
              onClick={() => activateKeyMoment(event.id)}
              {...event}
            />
          )
        }

        return null
      })}
    </ul>
  </div>
)

