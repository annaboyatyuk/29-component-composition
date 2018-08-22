import React from 'react';
import {shallow} from 'enzyme';

import Dashboard from '../../../src/components/dashboard/index';
import NoteList from '../../../src/components/note-list/index';
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

  xit('should remove notes', () => {
    let wrapper = shallow(<Dashboard />);
    
    let note = {
      id: '1234',
      title: 'title',
      content: 'content',
    };

    wrapper.instance().state.notes = [note];
    
    console.log('ffffff', wrapper.instance());

    expect(wrapper.state('notes').length).toBe(1);

    wrapper.instance().removeNote(note);
    console.log('jiej', note);

    expect(wrapper.state('notes').length).toBe(0);
  });
});
