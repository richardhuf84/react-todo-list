import React from 'react';
import Styled from 'styled-components';

const StyledWrapper = Styled.div`

  :root {
    --color-primary: hsl(217, 90%, 61%);
    --color-light: hsl(0, 0%, 100%);
    --color-dark: hsl(217, 13%, 19%);
    --color-dark-lightened: hsl(217, 13%, 24%);
    --border-radii: 20px;
  }

  body {
    font-family: "Nunito Sans", sans-serif;
    background-color: var(--color-dark);
    padding: 1rem;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    color: var(--color-primary);
    font-weight: 900;
  }

  .todo-list {
    color: var(--color-light);
    padding: 1rem 0 0;
  }

  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0 0 0 0.75rem;
    margin: 0;

    &--completed {
      .todo-item-content-input {
        text-decoration: line-through;
      }
    }
  }

  .todo-remove {
    margin-left: 1rem;
  }

  .todo-item-toggle {
    display: flex;
    position: relative;
    align-items: center;
    margin-right: -1.5rem;
  }

  .todo-item-text {
    display: flex;
    align-items: center;
    padding: 0 0.75rem 0 0;

    &:hover {
      background-color: var(--color-dark-lightened);
      transition: background-color 200ms ease;

      .edit-icon {
        opacity: 1;
        transition: opacity 200ms ease;
      }

      // disable hover if item edit is disabled
      .todo-item--completed & {
        background-color: transparent;

        .edit-icon {
          opacity: 0.3;
        }
      }
    }
  }

  .todo-item-content {
    margin-right: 1rem;
  }

  .todo-item-content-input {
    background: transparent;
    color: var(--color-light);
    margin-left: 1rem;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    border: 0;
    font-size: 1.5rem;

    &::selection {
      background-color: var(--color-primary);
    }

    &:focus {
      outline: none;
    }
  }

  .todo-form {
    max-width: 100vw;

    @media screen and (min-width: 768px) {
      max-width: 30vw;
    }
  }

  .edit-icon {
    margin-right: 0.5rem;
    opacity: 0.3;
  }

  .todo-input-label {
    color: var(--color-light);
    display: block;
  }

  .todo-input-add {
    display: block;
    width: 100%;
    max-width: 100%;
    margin-bottom: 0.5rem;
  }

  [type="button"],
  [type="submit"] {
    all: unset;
    background-color: var(--color-primary);
    padding: 0 1rem;
    line-height: 2rem;
    color: var(--color-light);
    border-radius: var(--border-radii);
  }

  [type="text"] {
    line-height: 2rem;
    margin-right: 0.5rem;
  }

  fieldset {
    border: 0;
    padding: 0;
  }

  .d-flex {
    display: flex;
  }

  // Transition
  .bounce-enter {
    opacity: 0.01;
  }

  .bounce-enter.bounce-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .bounce-leave {
    opacity: 1;
  }

  .bounce-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export default StyledWrapper;