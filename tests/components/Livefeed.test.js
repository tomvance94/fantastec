import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import LiveFeed from '../../src/components/LiveFeed'
import FeedItem from '../../src/components/FeedItem'

Enzyme.configure({ adapter: new Adapter() });

describe('Container', () => {

  context('when initialized', () => {
    let mockEvents, Feed

    beforeEach(() => {
      mockEvents = [
        {
          id: 2,
          interval: '05:00',
          isKeyMoment: false,
          eventType: null,
          comment: 'Kane is trying his best to catch Salah but he just cant keep up with his pace. It\'ll be intersting to see how this game unfolds.' 
        },
        {
          id: 3,
          interval: '05:00',
          isKeyMoment: false,
          eventType: null,
          comment: 'Kane is trying his best to catch Salah but he just cant keep up with his pace. It\'ll be intersting to see how this game unfolds.' 
        }
      ]

      Feed = shallow(<LiveFeed 
        feed={mockEvents}
        activeKeyMomentId={2}
      />)
    })

    it('renders two children', () => {
      expect(Feed.find(FeedItem).length).to.equal(2)
    })
  })
})