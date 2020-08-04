import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos.map((todo, index) => {
      return (
        <Droppable draggableId={todo.id} key={index}>
          <TodoItem
            todoIndex={todo.id}
            todo={todo}
            removeTodo={this.props.removeTodo}
            updateTodo={this.props.updateTodo}
          />
        </Droppable>
      );
    });

    return <ul className="todo-list">{todos}</ul>;
  }
}

export default TodoList;