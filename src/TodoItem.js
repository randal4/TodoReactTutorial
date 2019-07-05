import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

  constructor(props) {
      super(props);
      this.state = {
        isEditing: false,
      }
  }

  handleKeyPress(event){
    if(event.key === 'Enter'){
      this.onSaveClick(event);
    }
  }

  renderEditSection(){
      if(this.state.isEditing){
          return(
            <span className="float-right">
              <i className="fa fa-floppy-o" aria-hidden="true" onClick={this.onSaveClick.bind(this)}></i>
              <i className="fa fa-undo" aria-hidden="true" onClick={this.handleCancelEditing.bind(this)}></i>
            </span>
          )
      }else{
          return(
            <span className="float-right">
              <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={this.handleEditItem.bind(this)}></i>
              <i className="fa fa-trash-o" aria-hidden="true" onClick={this.props.handleDelete.bind(this, this.props.title)}></i>
            </span>
          )
      }
  }

  renderTodoItemSection(){
    const { title, completed } = this.props;
    if(this.state.isEditing){
      return(
            <span>
              <form className="inline">
                <input type="text" defaultValue={title} ref="editTitle" onKeyPress={this.handleKeyPress.bind(this)}/>
              </form>
            </span>
      )
    }else{
      return(
            <span className={completed ? 'complete' : 'incomplete'}
                  onClick={this.props.toggleTodoItem.bind(this,title)}>
              {title}
            </span>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderTodoItemSection()}
        {this.renderEditSection()}
      </div>
    );
  }

  handleEditItem(){
    this.setState({ isEditing: true });
  }

  handleCancelEditing(){
    this.setState({ isEditing: false});
  }

  onSaveClick(event){
    event.preventDefault();

    const oldTitle = this.props.title;
    const newTitle = this.refs.editTitle.value;

    if(oldTitle !== newTitle){
      this.props.saveTask(oldTitle, newTitle);
    }

    this.setState({ isEditing: false});
  }

}


export default TodoItem;
