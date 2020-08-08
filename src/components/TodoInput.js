import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleUpdate(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyUp(e) {
    if (e.keyCode === 13 && this.state.value.length) {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  }

  addTodo() {
    if (this.state.value.length) {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <div className="todo-input">
        <label htmlFor="todoInput" className="todo-input-label">
          Add item
        </label>
        <input
          type="text"
          id="todoInput"
          autoComplete="off"
          className="todo-input-add"
          value={this.state.value}
          onChange={this.handleUpdate}
          onKeyUp={this.handleKeyUp}
        />
        <input type="button" onClick={this.addTodo} value="Add" />
      </div>
    );
  }
}

export default TodoInput