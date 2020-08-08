import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  // Color variables. Numbers align to lightness value, rounded up.

  ${props => console.log('theme props', props)}

  :root {
    /* Misc variables */
    --border-radii: 20px;
  }

  body {
    font-family: "Nunito Sans", sans-serif;
    background-color: ${props => props.theme.colors.background};
    padding: 1rem;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
    transition: color 600ms ease, background-color 600ms ease;
  }

  .is-sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }

  h1 {
    color: ${props => props.theme.colors.primary};
    font-weight: 900;
  }

  .todo-list {
    color: ${props => props.theme.colors.light};
    padding: 1rem 0 0;
  }

  .todo-input {
    max-width: 500px;

    @media screen and (min-width: 768px) {
      max-width: 30vw;
    }
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
    transition: background-color 200ms ease;

    &:hover,
    &:active {
      background-color: ${props => props.theme.mode === 'dark' ? props.theme.colors.dark200 : props.theme.colors.dark100};
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

  .pencil-icon {
    color: ${props => props.theme.mode === 'light' ? props.theme.colors.light : props.theme.colors.dark};
    fill: ${props => props.theme.mode === 'light' ? props.theme.colors.light : props.theme.colors.dark};
  }

  .todo-placeholder {
    font-size: 2rem;
    color: ${props => props.theme.mode === 'light' ? props.theme.colors.light : props.theme.colors.dark};
    opacity: .1;
    text-align: center;
  }

  .todo-item-content {
    margin-right: 1rem;
  }

  .todo-item-content-input {
    background: transparent;
    color: ${props => props.theme.mode === 'light' ? props.theme.colors.light : props.theme.colors.dark};
    margin-left: 1rem;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    border: 0;
    font-size: 1.5rem;

    &::selection {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.light}
    }

    &:focus {
      outline: none; // we have a bg color change instead
    }
  }

  .todo-form {
    max-width: 500px;

    @media screen and (min-width: 768px) {
      max-width: 30vw;
    }
  }

  .edit-icon {
    margin-right: 0.5rem;
    opacity: 0.3;
  }

  .todo-input-label {
    color: ${props => props.theme.mode === 'light' ? props.theme.colors.light : props.theme.colors.dark};
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
    background-color: ${props => props.theme.colors.primary};
    padding: 0 1rem;
    line-height: 2rem;
    color: ${props => props.theme.colors.light};
    border-radius: var(--border-radii);
    transition: background-color 200ms ease;

    &:hover,
    &:active {
      background-color: ${props => props.theme.colors.primaryDark};
      text-decoration: underline;
      transition: background-color 200ms ease;
    }
  }

  [type="text"] {
    line-height: 2rem;
    margin-right: 0.5rem;
  }

  fieldset {
    border: 0;
    padding: 0;
  }

  .todo-legend {
    display: flex;
    justify-content: space-between;
  }

  .todo-toggle-wrap {
    display: flex;
    align-items: center;
  }

  .d-flex {
    display: flex;
  }

  ${'' /* .theme-toggler-button {
    all: unset;
    color: ${props => props.theme.mode === 'light' ? props.theme.colors.light : props.theme.colors.dark};
  } */}
`;

export default GlobalStyles;