const { UPDATE_ASYNC_DATA } = require('../actions/AsyncData');

const AsyncReducer = function(state = false, action) {
    if(action.type === UPDATE_ASYNC_DATA) {
        if(action.meta === 'request') {
            return {
                loading: true,
            };
        }
        else if(action.meta === 'finished') {
            return {
                loading: false,
                data: action.payload,
            };
        }
    }
    return state;
};

module.exports = AsyncReducer;
