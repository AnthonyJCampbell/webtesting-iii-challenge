// Test away
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

describe('Dashboard component',() => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Dashboard />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})