import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';

describe('Messages component', () => {
// Smoke test 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Messages />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Snapshot test 
it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Messages name="Messages" unread={4}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

it('renders the UI as expected with no unreads', () => {
    const tree = renderer
        .create(<Messages name="Messages" unread={0}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();  
    });

});