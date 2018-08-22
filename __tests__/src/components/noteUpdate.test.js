import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Dashboard from '../../../src/components/dashboard/index';
import NoteItem from '../../../src/components/note-item/index';
import NoteCreateForm from '../../../src/components/note-create-form';
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

  xit('should update a note', () => {
    let wrapper = shallow(<Dashboard/>);

    const note = {
      id: 222,
      title: 'title',
      content: 'content',
    };
    wrapper.instance().state.notes = [note];
    expect(wrapper.state('notes')[0].title).toBe('title');

    const event = {
      preventDefault: () => {},
    };

    let noteWrapper = shallow(<NoteUpdateForm note={note} updateNote={wrapper.instance().updateNote}/>);

    wrapper.instance().state.title = 'new one';
    wrapper.instance().updateNote(event);

    expect(wrapper.state('notes')[0].title).toBe('');

  });


});