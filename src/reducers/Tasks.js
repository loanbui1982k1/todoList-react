
import * as types from './../constants/actionTypes';

var randomStr = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString() + "-" + 
          Math.floor((1+Math.random()) * 0x10000).toString(); 
  };
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];
var indexOf = (tasks, id) => {
    var res = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            res = index;
        }
    })
    return res;
}
var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            if (!action.task.id) {
                var newTask = {
                    id : randomStr(), 
                    name : action.task.name,
                    status: action.task.status 
                }
                state.push(newTask);
            } else {
                var index = indexOf(state, action.task.id);
                state[index] = {...state[index], status: action.task.status, name: action.task.name}
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state];
        case types.CHANGE_STATUS:
            var res = indexOf(state, action.id);
            state[res] = {...state[res], status: !state[res].status}
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            res = indexOf(state, action.id);
            state.splice(res, 1);
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];
        case types.FILTER:
            state = initialState;
            state = state.filter((task) => {
            if (action.filterStatus === "-1") {
            return task.name.toLowerCase().indexOf(action.filterName) !== -1
            } else {
                return (task.name.toLowerCase().indexOf(action.filterName) !== -1 &&
                        Number(task.status) === Number(action.filterStatus))
                }       
            })
            return [...state];
        case types.SEARCH:
            state = JSON.parse(localStorage.getItem('tasks'));
            state = state.filter((task) => {
                return task.name.toLowerCase().indexOf(action.searchName.toLowerCase()) !==-1   
            })
            return [...state];
        case types.SORT:
            state.sort((taskOne, taskTwo) => {
                if (action.sortBy === 'name') {
                if (taskOne.name.toLowerCase() > taskTwo.name.toLowerCase()) return +action.sortValue
                else return -action.sortValue;
                } else {
                if (Number(taskOne.status) < Number(taskTwo.status)) return +action.sortValue
                else return -action.sortValue;
                }
            })
            return [...state]
        default:
            return state;
    }
};
export default myReducer;