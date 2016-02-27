let { combineReducers } = require('redux');
let nameReducer = require('./reducers/NameReducer');
let asyncReducer = require('./reducers/AsyncReducer');

module.exports = combineReducers({
    appName: nameReducer,
    asyncData: asyncReducer,
});
