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
        />
      );
    });

    return <ul className="todo-list">{todos}</ul>;
  }
}

export default TodoList;