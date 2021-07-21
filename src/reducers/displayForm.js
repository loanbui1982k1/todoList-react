
import * as types from './../constants/actionTypes';

var initialState = false;
var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.DISPLAY_FORM:
            return true;
        case types.CLOSE_FORM:
            return false;
        case types.UPDATE_TASK:
            return true;
        default:
            return state;
    }
};
export default myReducer;