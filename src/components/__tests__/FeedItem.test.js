import React from 'react';
import FeedItem from '../FeedItem';
import renderer from 'react-test-renderer';

test('When active it has the active class', () => {
  const component = renderer.create(
    <FeedItem 
      id={1}
      interval='10:00'
      activeKeyMomentId={0}
      comment='The Comment String'
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.activeKeyMomentId = 1;
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});