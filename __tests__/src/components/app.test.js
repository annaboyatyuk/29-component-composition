import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../../src/components/app/index';


xdescribe('<App/> (Enzyme Test)', () => {
  it('is alive at application start', () => {
    let app = shallow(<App/>);
    expect(app.find('main').exists()).toBeTruthy();
    expect(app.find('Header').exists()).toBeTruthy();
  });
});


describe('<App/> (Snapshot Test', () => {
  it('renders', () => {
    const component = renderer.create(
      <App />
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

