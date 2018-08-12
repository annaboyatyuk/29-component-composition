import React from 'react';

import Item from './../note-item/index';

export default class NoteList extends React.Component {


  render() {
    return (
      <React.Fragment>
        <ul>

          {this.props.notes.map(item => (
            <li id={item.id} key={item.id}>
              <h2>{item.title}</h2>
              {/* <p onDoubleClick={this.props.handleDouble} >
                {item.content}
              </p> */}
              <Item remove={this.props.remove} note={item} updateNote={this.props.updateNote}/>
            </li>
          ))}
        </ul>

      </React.Fragment>
    );
  }
}