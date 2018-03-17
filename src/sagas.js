import { put, takeEvery, call } from 'redux-saga/effects'
import * as actions from './action'

const url = 'http://test-saga.com/test.php';

export function* loadDataFromAPI() {
    const response = yield call(
        fetch,
        url
    );
    const data = yield call([response, "json"]);
    yield put(actions.updateStore(data));
}

export default function* rootSaga() {
    yield takeEvery('ON_LOAD_DATA_FROM_API', loadDataFromAPI)
}

/*export default function* rootSaga() {
    yield all([
        incrementAsync(),
        //watchIncrementAsync()
    ])
}*/
