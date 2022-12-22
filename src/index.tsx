/* 
* primeiro arquivo 'javascript' carregado na aplicação. 
*/

import React from 'react';
import ReactDOM from 'react-dom/client';  // integração do React com a DOM.
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// método .render() que recebe tags (componentes).
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
