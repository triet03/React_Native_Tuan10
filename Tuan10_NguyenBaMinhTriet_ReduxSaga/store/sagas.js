import { takeEvery, put } from 'redux-saga/effects';
import { addTask, updateTask, deleteTask } from './actions';

function* handleAddTask(action) {
  yield put(addTask(action.payload));
}

function* handleUpdateTask(action) {
  yield put(updateTask(action.payload));
}

function* handleDeleteTask(action) {
  yield put(deleteTask(action.payload));
}

function* rootSaga() {
  yield takeEvery('ADD_TASK_SAGA', handleAddTask);
  yield takeEvery('UPDATE_TASK_SAGA', handleUpdateTask);
  yield takeEvery('DELETE_TASK_SAGA', handleDeleteTask);
}

export default rootSaga;
