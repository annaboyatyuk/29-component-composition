import React from 'react';
import uuid from 'uuid/v1';

import Form from './../note-create-form/index';
import List from './../note-list/index';


export default class Notes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      id: '',
      title: '',
      content: '',
      editing: false,
      completed: false,
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let id = uuid();
    this.setState({id, [e.target.id]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addNote();
    this.setState({
      title: '',
      content: '',
    });
  }

  addNote() {
    let items = {
      id: this.state.id,
      title: this.state.title,
      content: this.state.content,
      editing: this.state.editing,
      completed: this.state.completed,
    };
    let arr = [...this.state.notes, items];
    this.setState({notes: arr}
    );
  }

  removeNote(note) {
    let arr = [...this.state.notes];

    for(let i = 0; i < arr.length; i++) {
      if(arr[i].id === note) {
        arr.splice(i, 1);
      }
    }
    this.setState({notes: arr});
  }

  updateNote(note) {
  //   if(note === {}) {
  //     this.setState({
  //       editing : false,
  //     });
  //   } else {
  //     let arr = [...this.state.notes];

  //     for(let i = 0; i < arr.length; i++) {
  //       if(arr[i].id === note.id) {
  //         arr[i] = note;
  //       }
  //     }
  //     this.setState({notes: arr});
  //   }
  // }
    let arr = [...this.state.notes];

    for(let i = 0; i < arr.length; i++) {
      if(arr[i].id === note.id) {
        arr[i] = note;
      }
    }
    this.setState({notes: arr, editing: false});
  }

  // showForm() {
  //   this.setState({editing: true});
  // }

  render() {
    return (
      <React.Fragment>

        <Form
          handleSubmit={this.handleSubmit} handleChange={this.handleChange} content={this.state.content} title={this.state.title}
        />

        <List notes={this.state.notes} remove={this.removeNote} updateNote={this.updateNote}/>

      </React.Fragment>
    );
  }

}
