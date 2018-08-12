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
    console.log('XXXXXXX', this.state);
    this.setState({editing: true})
    console.log('AAAAAAAa', this.props.note)
  }


  render() {

    
    if(this.state.editing) {
      console.log('OOOOOOOOOOOOOO', this.state);
      return (
        <React.Fragment>
        <p>
          {this.props.note.content}
        </p>

        <button onClick={this.removeOne} >X</button>

        <UpdateForm  note={this.props.note} handleSubmit={this.props.handleSubmit} updateNote={this.props.updateNote} editState={this.state.editing}/>
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
