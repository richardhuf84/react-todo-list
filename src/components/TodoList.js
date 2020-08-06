import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map((todo, index) => {
      return (
        <TodoItem
          todoIndex={todo.id}
          todo={todo}
          removeTodo={this.props.removeTodo}
          updateTodo={this.props.updateTodo}
          key={index}
        />
      );
    });

    return <ul className="todo-list">
      {todos && todos.length ? (
        todos
      ) : (
          <li className="todo-placeholder">
            You haven't added any todo's yet!
          </li>
        )}
    </ul>;
  }
}

export default TodoList;