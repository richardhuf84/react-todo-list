import React from 'react';
import PencilIcon from './PencilIcon';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleContentFocus = this.handleContentFocus.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = { todo: this.props.todo };
  }

  handleToggleComplete(e) {
    this.props.updateTodo({
      id: this.state.todo.id,
      label: this.state.todo.label,
      completed: e.target.checked
    });
  }

  handleContentFocus(e) {
    e.target.select();
  }

  handleOnChange(e) {
    const val = e.target;
    this.props.updateTodo({
      id: this.state.todo.id,
      label: e.target.value,
      completed: this.state.todo.completed
    });
  }

  render() {
    const id = Date.now();
    const toggleId = `todo-toggle-${id}`;
    const contentId = `todo-content-${id}`;
    return (
      <li
        className={`todo-item ${
          this.state.todo.completed ? "todo-item--completed" : ""
          }`}
        key={this.props.todo.id}
      >
        <div className="todo-item-content d-flex">
          <div className="todo-item-toggle">
            <input
              type="checkbox"
              onChange={this.handleToggleComplete}
              checked={this.state.todo.completed}
              className="todoItem-checkbox"
              id={toggleId}
            />
            <label for={toggleId} className="is-sr-only">
              {this.state.todo.label}
            </label>
          </div>

          <div className="todo-item-text">
            <input
              type="text"
              value={this.state.todo.label}
              id={contentId}
              className="todo-item-content-input"
              onFocus={this.handleContentFocus}
              onChange={this.handleOnChange}
              disabled={this.state.todo.completed}
            />
            <label className="is-sr-only" for={contentId}>
              Todo item
            </label>
            <PencilIcon />
          </div>
        </div>
        <button
          className="todo-remove"
          type="button"
          onClick={() => this.props.removeTodo(this.state.todo.id)}
        >
          Remove
        </button>
      </li>
    );
  }
}

export default TodoItem;