const React = require('react');
const ReactDOM = require('react-dom');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const createLogger = require('redux-logger');
const { Provider } = require('react-redux');
const reducer = require('./RootReducer');
const App = require('./containers/App');

const logger = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('app')
);
