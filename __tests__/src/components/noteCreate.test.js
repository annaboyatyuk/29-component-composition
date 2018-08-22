import React from 'react';
import {shallow} from 'enzyme';

import Dashboard from '../../../src/components/dashboard/index';
import NoteCreate from '../../../src/components/note-create-form';

describe('Note create form', () => {
  it('should render', () => {
    shallow(<NoteCreate />);
  });


  it('should handle form changes', () => {
    const wrapper = shallow(<Dashboard />);
    const instance = wrapper.instance();
    const event = {
      preventDefault: function() {},
      target: {
        id: 'title',
        value: 'new title',
        type: 'text',
      },
    };
    instance.handleChange(event);
    expect(wrapper.state('title')).toBe('new title');

  });

  it('should submit a new note', () => {
    const wrapper = shallow(<Dashboard/>);
    
    const event = {
      preventDefault: () => {},
    };

    wrapper.instance().addNote(event);
    expect(wrapper.state('notes').length).toBe(1);

  });

});