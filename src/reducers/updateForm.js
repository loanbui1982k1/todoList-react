import * as types from './../constants/actionTypes';

var initialState = null;
var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.UPDATE_TASK:
            return action.task
        case types.ADD_TASK:
            return null;
        case types.CLOSE_FORM:
            return null;
        case types.DISPLAY_FORM:
            return null;
        default:
            return state;
    }
};
export default myReducer;