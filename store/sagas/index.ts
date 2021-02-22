import { all, fork } from 'redux-saga/effects';

import {
  watchCreateTodo,
  watchDelete,
  watchGetTodos,
  watchgetTodo,
  watchUpdateTodo,
} from './todos';

export default function* rootSaga() {
  yield all([
    fork(watchCreateTodo),
    fork(watchGetTodos),
    fork(watchDelete),
    fork(watchgetTodo),
    fork(watchUpdateTodo),
  ]);
}
