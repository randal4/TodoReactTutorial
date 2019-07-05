import _ from 'lodash';
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

class TodoList extends Component {
  render() {
    var todoItems = this.props.todoItems;
    const props = _.omit(this.props, 'todoItems');

    var todoItemsList = todoItems.map((todo, index) => <li key={index}><TodoItem {...todo} {...props}/></li>)

    return (
      <div id="todoItemsList">
        <ul>
          {todoItemsList}
        </ul>
      </div>
    );
  }
}

export default TodoList;
