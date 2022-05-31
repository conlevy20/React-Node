import tasksActionTypes from '../actions/tasks.actions';

export const TASKS_INITIAL_STATE = [];

const tasksReducer = (state, action) => {
    switch (action.type) {
        case tasksActionTypes.INIT_TASKS: {
            const tasks = action.payload.tasks;
            const updatedState = tasks;

            return updatedState;
        }
        default:
            return state;
    }
};

export default tasksReducer;