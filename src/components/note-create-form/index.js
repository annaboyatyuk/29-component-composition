import React from 'react';


export default class Form extends React.Component {

  render() {
    return(
      <React.Fragment>

        <form id='createForm' onSubmit={this.props.handleSubmit}>

          <label>TITLE</label>
          <input type="text" id='title' value={this.props.title} onChange={this.props.handleChange}/>

          <label>NOTE</label>
          <input type="text" id='content' value={this.props.content}onChange={this.props.handleChange}/>

          <input type='submit'/>

        </form>

      </React.Fragment>
    );
  }



}