import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './dark-mode.css';
import App from './App';
const DATA = [
  { id: 'todo-0', name: 'coffee', completed: true },
  { id: 'todo-1', name: 'poop', completed: false },
  { id: 'todo-2', name: 'sleep', completed: false }
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);