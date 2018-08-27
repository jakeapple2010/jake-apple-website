import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App items={["yo","dawg","bro","yeah"]}/>, document.getElementById('root'));
registerServiceWorker();
