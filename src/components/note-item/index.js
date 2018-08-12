import React from 'react';

import UpdateForm from '../note-update-form';

export default class noteItem extends React.Component {

  state = {
    editing: false,
  }

  removeOne = (e) => {
    e.preventDefault();
    this.props.remove(e.target.parentNode.id);
    console.log(e.target.parentNode.id);
  }

  handleDouble = (e) => {
    e.preventDefault();
    this.setState({editing: true})
  }

  onCancel = (e) => {
    e.preventDefault();
    this.setState({editing: false})
  }


  render() {

    if(this.state.editing) {
      return (
        <React.Fragment>
        <p>
          {this.props.note.content}
        </p>

        <button onClick={this.removeOne} >X</button>

        <UpdateForm  note={this.props.note} handleSubmit={this.props.handleSubmit} updateNote={this.props.updateNote} onCancel={this.onCancel}/>
      </React.Fragment>
      );
    }

    return (
      <React.Fragment>

        <p onDoubleClick={this.handleDouble} >
          {this.props.note.content}
        </p>

        <button onClick={this.removeOne} >X</button>

      </React.Fragment>
    );

  }

}
