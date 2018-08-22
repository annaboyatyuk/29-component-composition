import React from 'react';
import {shallow} from 'enzyme';


import Dashboard from '../../../src/components/dashboard/index';
import NoteCreate from '../../../src/components/note-create-form/index';
import NoteList from '../../../src/components/note-list/index';

describe('Dashboard', () => {
  it('should render without crashing', () => {
    shallow(<Dashboard />);
  });

  it('should have form', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(NoteCreate)).toBeDefined();
    expect(wrapper.find(NoteList)).toBeDefined();
  });
});