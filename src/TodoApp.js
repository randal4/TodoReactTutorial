import _ from 'lodash';
import React, { Component } from 'react';
import TodoList from './TodoList'
import CreateTodo from './CreateTodo'

const todoItems = [
  {title: "test", completed:false},
  {title: "test2", completed:true},
];

class TodoApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      todoItems,
    }
  }

  toggleTodoItem(title){
    const foundTodo = _.find(this.state.todoItems, todo => todo.title === title);
    foundTodo.completed = !foundTodo.completed;
    this.setState({todoItems: this.state.todoItems});
  }

  handleDelete(title){
    _.remove(this.state.todoItems, todo => todo.title === title);
    this.setState({todoItems: this.state.todoItems});
  }

  saveTask(oldTitle, newTitle){
    const foundTodo = _.find(this.state.todoItems, todo => todo.title === oldTitle);
    foundTodo.title = newTitle;
    foundTodo.completed = false;
    this.setState({todoItems: this.state.todoItems});
  }

  createTask(title){
    this.state.todoItems.push({
      title: title,
      completed: false,
    });
    this.setState({todoItems: this.state.todoItems});
  }

  render() {
    return (
      <div className="todoApp">
        <CreateTodo
          createTask={this.createTask.bind(this)}
        />
        <TodoList todoItems={this.state.todoItems}
          toggleTodoItem={this.toggleTodoItem.bind(this)}
          saveTask={this.saveTask.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
        />
      </div>
    );
  }
}

export default TodoApp;
