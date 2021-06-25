import { put, takeEvery } from 'redux-saga/effects';
import { initListAction } from './actionCreator';
import { GET_TODO_ITEM } from './actionTypes';
import axios from 'axios';

function* getTodoItem() {
    try {
        const res = yield axios.get('/list.json');
        console.log(res);
        const action = initListAction(res.data);
        yield put(action);
    } catch (error) {
        console.log('获取数据失败');
    }
}

function* mySaga() {
    yield takeEvery(GET_TODO_ITEM, getTodoItem);
}

export default mySaga;