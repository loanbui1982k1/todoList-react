import { combineReducers } from "redux";
import tasks from './Tasks';
import displayForm from './displayForm';
import updateForm from './updateForm';
const myReducer = combineReducers({
    tasks,
    displayForm, updateForm
});

export default myReducer;