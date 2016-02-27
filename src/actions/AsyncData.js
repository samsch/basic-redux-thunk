
const UPDATE_ASYNC_DATA = 'actions/AsyncData/UPDATE_ASYNC_DATA';

let getData = function() {
    return function(dispatch) {
        dispatch({
            type: UPDATE_ASYNC_DATA,
            meta: 'request',
        });
        setTimeout(function() {
            dispatch({
                type: UPDATE_ASYNC_DATA,
                meta: 'finished',
                payload: 'New Asyncronous Data!',
            });
        }, 1000);
    }
};

module.exports = {
    UPDATE_ASYNC_DATA,
    getData,
}
