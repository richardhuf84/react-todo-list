import React from 'react';
import Title from './components/Title';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme"
import { v4 as uuid } from 'uuid';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);

    let todos;

    if (localStorage.getItem("todos") !== null) {
      todos = JSON.parse(localStorage.getItem("todos"));
    } else {
      todos = [];
    }

    this.state = {
      todos,
      theme: 'dark'
    };
  }

  toggleTheme() {
    this.setState((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      const updatedState = {
        ...state,
        theme: newTheme
      };

      return updatedState;
    });
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
    console.log('id', id);
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

  capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <legend className="todo-legend">
            <Title title="React Todo List" />
            <div className="todo-toggle-wrap">
              <button type="button" className="theme-toggler-button" onClick={this.toggleTheme}>{this.capitalizeFirstLetter(this.state.theme)} mode</button>
            </div>
          </legend>
          <fieldset>
            <TodoInput addTodo={this.addTodo} />
            <TodoList
              todos={this.state.todos}
              removeTodo={this.removeTodo}
              updateTodo={this.updateTodo}
            >
            </TodoList>
          </fieldset>
        </form>
      </ThemeProvider>
    );
  }
}

export default App;
