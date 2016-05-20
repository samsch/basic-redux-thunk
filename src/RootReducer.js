const { combineReducers } = require('redux');
const nameReducer = require('./reducers/NameReducer');
const asyncReducer = require('./reducers/AsyncReducer');

module.exports = combineReducers({
    appName: nameReducer,
    asyncData: asyncReducer,
});
