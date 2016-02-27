let React = require('react');
let ReactDOM = require('react-dom');
let { createStore, applyMiddleware } = require('redux');
let thunk = require('redux-thunk');
let createLogger = require('redux-logger');
let { Provider } = require('react-redux');
let reducer = require('./RootReducer');
let App = require('./containers/App');

let logger = createLogger();

let store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('app')
);
