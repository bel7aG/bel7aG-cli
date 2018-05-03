import React from 'react';
import ReactDOM from 'react-dom';
import App, { AppRouter } from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
