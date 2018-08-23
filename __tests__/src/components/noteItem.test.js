import React from 'react';
import {shallow} from 'enzyme';

import Dashboard from '../../../src/components/dashboard/index';
import NoteItem from '../../../src/components/note-item/index';

describe('Note List', () => {

  it('should have state', () => {
    const note = {
      id: 222,
      title: 'title',
      content: 'content',
    };
    let wrapper = shallow(<NoteItem note={note}/>);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should remove notes', () => {
    let wrapper = shallow(<Dashboard />);
    let instance = wrapper.instance();
    
    let note = {
      id: '1234',
      title: 'title',
      content: 'content',
    };

    instance.state.notes = [note];

    expect(wrapper.state('notes').length).toBe(1);

    instance.removeNote(note.id);

    expect(wrapper.state('notes').length).toBe(0);
  });
});
