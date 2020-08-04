import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value.length) {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todoInput">
        <label for="todoInput" className="todo-input-label">
          Add item
        </label>
        <input
          type="text"
          id="todoInput"
          ref="todoInput"
          autocomplete="off"
          className="todo-input-add"
          value={this.state.value}
          onChange={this.handleUpdate}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default TodoInput