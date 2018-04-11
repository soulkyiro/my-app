import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import Thai from './Component/Thai';
import Operation from './Component/Operation';
import Timer from './Component/Timer';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Thai />, document.getElementById('root'));

ReactDOM.render(<Operation />, document.getElementById('operation'));

ReactDOM.render(<Timer />, document.getElementById('timer'));
//registerServiceWorker();
