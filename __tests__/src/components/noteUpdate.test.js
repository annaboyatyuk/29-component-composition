import React from 'react';
import {shallow} from 'enzyme';

import Dashboard from '../../../src/components/dashboard/index';
import NoteUpdateForm from '../../../src/components/note-update-form/index';

describe('Note create form', () => {
  it('should have state', () => {
    const note = {
      id: 222,
      title: 'title',
      content: 'content',
    };
    let wrapper = shallow(<NoteUpdateForm note={note}/>);
    expect(wrapper.find('form').exists()).toBeTruthy();
  });

  it('should update a note', () => {
    let wrapper = shallow(<Dashboard/>);
    let instance = wrapper.instance();

    const note = {
      id: 222,
      title: 'title',
      content: 'content',
    };
    instance.state.notes = [note];
    expect(wrapper.state('notes')[0].title).toBe('title');

    const note2 = {
      id: 222,
      title: 'sfljlksdjf',
    };

    instance.updateNote(note2);

    expect(wrapper.state('notes')[0].title).toBe('sfljlksdjf');
  });

});