import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import Container from '../../src/containers/Commentary';
import mockFeed from '../../src/feed'

import LiveFeed from '../../src/components/LiveFeed'
import KeyMoments from '../../src/components/KeyMoments'

Enzyme.configure({ adapter: new Adapter() });

describe('Container', () => {

  context('when initialized', () => {
    let feed

    beforeEach(() => {
      feed = shallow(<Container />)
    })

    it('Adds the mock feed to its state', () => {
      expect(feed.state().feed).to.deep.equal(mockFeed.feed)
    })

    it('Sets the activeKeyMoment to null', () => {
      expect(feed.state().activeKeyMoment).to.be.null
    })
  })

  context('on the initial render', () => {
    let feed

    beforeEach(() => {
      feed = shallow(<Container />)
    })

    it('renders the LiveFeed', () => {
      expect(feed.find(LiveFeed).length).to.equal(1)
    })

    it('renders the KeyMoments', () => {
      expect(feed.find(KeyMoments).length).to.equal(1)
    })
  })

  context('calling activateKeyMoment updates the internal state', () => {
    let feed

    beforeEach(() => {
      feed = shallow(<Container />)
      feed.instance().activateKeyMoment(1)
    })

    it('Sets the activeKeyMoment to null', () => {
      expect(feed.state().activeKeyMoment).to.equal(1)
    })
  })
})