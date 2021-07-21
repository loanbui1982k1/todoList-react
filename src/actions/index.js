import * as types from './../constants/actionTypes';
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}
export const addTask = (task) => {
    return {
        type : types.ADD_TASK,
        task
    }
}
export const displayForm = () => {
    return {
        type: types.DISPLAY_FORM
    }
}
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}
export const changeStatus = (id) => {
    return {
        type: types.CHANGE_STATUS,
        id
    }
}
export const updateTask = (task) => {
    return {
        type: types.UPDATE_TASK,
        task
    }
}
export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id
    }
}
export const filter = (filterName, filterStatus) => {
    return {
        type: types.FILTER,
        filterName, filterStatus
    }
}
export const search = (searchName) => {
    return {
        type: types.SEARCH,
        searchName
    }
}
export const sort = (sortBy, sortValue) => {
    return {
        type: types.SORT,
        sortBy, sortValue
    }
}