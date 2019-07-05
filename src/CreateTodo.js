import React, { Component } from 'react';
import './CreateTodo.css'

class CreateTodo extends Component {
  handleKeyPress(event){
    if(event.key === 'Enter'){
      this.onCreateClick();
    }
  }

  render() {
    return (
      <div id="createTask">
        <input type="text" placeholder="What do we need to do?" ref="newTitle" onKeyPress={this.handleKeyPress.bind(this)}/>
        <i className="fa fa-plus" aria-hidden="true" onClick={this.onCreateClick.bind(this)}></i>
      </div>
    );
  }

  onCreateClick(){
    const newTitle = this.refs.newTitle.value;

    if(newTitle){
      this.props.createTask(newTitle);
      this.refs.newTitle.value="";
    }
  }
}

export default CreateTodo;
