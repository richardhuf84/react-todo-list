import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos.map((todo, index) => {
      return (
        <Draggable draggableId={todo.id} key={index}>
          <TodoItem
            todoIndex={todo.id}
            todo={todo}
            removeTodo={this.props.removeTodo}
            updateTodo={this.props.updateTodo}
          />
        </Dragable>
      );
    });

    return <ul className="todo-list">{todos}</ul>;
  }
}

export default TodoList;