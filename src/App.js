import React from 'react';
import Title from './components/Title';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import StyledWrapper from './components/StyledWrapper';
import { uuid } from 'uuidv4';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    let todos;

    if (localStorage.getItem("todos") !== null) {
      todos = JSON.parse(localStorage.getItem("todos"));
    } else {
      todos = [];
    }

    this.state = {
      todos
    };
  }

  addTodo(todo) {
    this.setState((state) => {
      const id = uuid();
      const todos = state.todos.concat({
        id,
        completed: false,
        label: todo
      });
      localStorage.setItem("todos", JSON.stringify(todos));
      return {
        todos
      };
    });
  }

  updateTodo(updatedTodo) {
    this.setState(
      function (state) {
        const todos = state.todos.map((todo) => {
          if (todo.id === updatedTodo.id) {
            todo.label = updatedTodo.label;
            todo.completed = updatedTodo.completed;
          }

          return todo;
        });
        return { todos };
      },
      () => {
        localStorage.removeItem("todos");
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  }

  removeTodo(id) {
    this.setState(
      (state) => {
        const todos = state.todos.filter((todo) => todo.id !== id);
        return {
          todos: todos
        };
      },
      () => {
        localStorage.removeItem("todos");
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <StyledWrapper>
        <TodoInput addTodo={this.addTodo} />
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <legend>
            <Title title="React Todo List" />
          </legend>
          <fieldset>
            <TodoList
              todos={this.state.todos}
              removeTodo={this.removeTodo}
              updateTodo={this.updateTodo}
            >
            </TodoList>
          </fieldset>
        </form>
      </StyledWrapper>
    );
  }
}

export default App;
