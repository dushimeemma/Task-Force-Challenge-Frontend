import { TodoState } from '../types';
import { TD_TYPES } from '../actions/todos';

const initialState: TodoState = {
  todos: [],
  todo: {},
  message: '',
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TD_TYPES.CREATE_TODO:
    case TD_TYPES.UPDATE_TODO:
      return {
        ...state,
        message: 'Success',
      };
    case TD_TYPES.GET_ALL:
      return {
        ...state,
        todos: action.payload,
      };
    case TD_TYPES.DELETE_TODO:
      return {
        ...state,
        message: 'Success',
      };
    case TD_TYPES.GET_ONE:
      return {
        ...state,
        todo: action.payload,
      };
    case TD_TYPES.CREATE_ERROR:
      return {
        ...state,
        error: 'Failed',
      };
    default:
      return state;
  }
};
