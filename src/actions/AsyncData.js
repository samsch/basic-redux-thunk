
//Using the module path in the action type value means that if you use the same
//action name in another place, they won't conflict when dispatched. You can
//also use random values, or another unique identifier.
const UPDATE_ASYNC_DATA = 'actions/AsyncData/UPDATE_ASYNC_DATA';

const getData = function() {
    //The thunk is also passed the state as a second parameter, but it's not
    //needed very frequently.
    return function(dispatch) {
        //These actions use the meta property to denote what they are doing.
        //Another solution is to use separate action types.
        dispatch({
            type: UPDATE_ASYNC_DATA,
            meta: 'request',
        });
        //Normally, you'd have an ajax call, or some other asynchronous action
        //beside a setTimeout.
        setTimeout(function() {
            dispatch({
                type: UPDATE_ASYNC_DATA,
                meta: 'finished',
                payload: 'New asynchronous data!',
            });
        }, 1000);
    }
};

module.exports = {
    UPDATE_ASYNC_DATA,
    getData,
}
