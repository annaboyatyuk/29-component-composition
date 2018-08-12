import React from 'react';


export default class UpdateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note.id,
      title: this.props.note.title,
      content: this.props.note.content,
      editing: this.props.note.editing,
      completed: this.props.note.completed,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onCancel = this.onCancel.bind(this);

  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateNote(this.state);
  }

  onCancel(e) {
    e.preventDefault();
    this.props.updateNote({});
    this.setState({editing: false});
  }


  render() {
    console.log(this.props.note);
    
    return (
      <React.Fragment>

      
        <form onSubmit={this.handleSubmit}>
        
          <label>Edit Title</label>

          <input type="text" name='title' onChange={this.handleChange} placeholder={this.props.note.title}/>

          <label>Edit note</label>

          <input type="text" name='content' onChange={this.handleChange} placeholder={this.props.note.content}/>

          <button onClick={this.onCancel}>Cancel</button>
          <button>Submit</button>
        
        </form>
      
      </React.Fragment>
    );

  }


}