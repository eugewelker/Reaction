import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-react';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';

const store= createStore(rootReducer);

console.log('store.getState()', store.getState());

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root')
);
