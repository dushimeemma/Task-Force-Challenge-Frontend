import { call, fork, put, take } from 'redux-saga/effects';

import {
  createTask,
  getTasks,
  deleteTodo,
  getSingleTodo,
  updateTodo,
} from '../../services/todos';
import { TD_TYPES } from '../actions/todos';

function* createTodo(data) {
  try {
    yield call(() => createTask(data));
    yield put({ type: TD_TYPES.CREATE_TODO, payload: data });
  } catch (error) {
    yield put({ type: TD_TYPES.CREATE_ERROR, payload: error });
  }
}

function* Delete(data) {
  try {
    const res = yield call(() => deleteTodo(data.title));
    yield put({ type: TD_TYPES.DELETE_TODO, payload: res });
  } catch (error) {
    yield put({ type: TD_TYPES.CREATE_ERROR, payload: error });
  }
}

function* getTodos() {
  try {
    const todos = yield call(() => getTasks());
    yield put({ type: TD_TYPES.GET_ALL, payload: todos });
  } catch (error) {
    yield put({ type: TD_TYPES.CREATE_ERROR, payload: error });
  }
}

function* getTodo(data) {
  try {
    const res = yield call(() => getSingleTodo(data.title));
    yield put({ type: TD_TYPES.GET_ONE, payload: res });
  } catch (error) {
    yield put({ type: TD_TYPES.CREATE_ERROR, payload: error });
  }
}

function* updateTodos(data) {
  try {
    yield call(() => updateTodo(data.title, data.values));
    yield put({ type: TD_TYPES.UPDATE_TODO, payload: data });
  } catch (error) {
    yield put({ type: TD_TYPES.CREATE_ERROR, payload: error });
  }
}

export function* watchUpdateTodo() {
  const { payload } = yield take(TD_TYPES.UPDATE_TODO);
  yield fork(updateTodos, payload);
}

export function* watchCreateTodo() {
  const { payload } = yield take(TD_TYPES.CREATE_TODO);
  yield fork(createTodo, payload);
}

export function* watchDelete() {
  const { payload } = yield take(TD_TYPES.DELETE_TODO);
  yield fork(Delete, payload);
}

export function* watchGetTodos() {
  const { payload } = yield take(TD_TYPES.GET_ALL);
  yield fork(getTodos);
}

export function* watchgetTodo() {
  const { payload } = yield take(TD_TYPES.GET_ONE);
  yield fork(getTodo, payload);
}
