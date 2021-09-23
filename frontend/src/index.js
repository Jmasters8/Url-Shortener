import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Root from './components/root';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

document.addEventListener('DOMContentLoaded', () => {
  let store;

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root)
})

