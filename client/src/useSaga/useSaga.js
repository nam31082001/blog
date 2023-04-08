import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { ADD_COMMENT, POST_COMMENT, ADD_IN_DATA, ADD_NEWS, COUNT_LIKE, COUNT_LIKE_API, DELETE_DB, GET, GET_COMMENT, GET_IN_COMMENT, GET_IN_DATA, CHECK_DETAIL } from "../redux/action";

function* addNew(action) {
    try {
        const res = yield axios.post('http://localhost:5000/add', action.payload)
        yield put({ type: ADD_IN_DATA, payload: res.data });

    } catch (error) {
        console.log("error - getUser : ", error);
    }


}
function* getApi() {
    try {
        const res = yield axios.get('http://localhost:5000/')
        yield put({ type: GET_IN_DATA, payload: res.data });

    } catch (error) {
        console.log("error - getUser : ", error);
    }
}

function* deleteItem(action) {
    console.log(action.payload)
    try {
        const res = yield axios.delete(`http://localhost:5000/delete/${action.payload}`)
        console.log(res.data)

    } catch (error) {
        console.log("error - getUser : ", error);
    }
}

function* putCountLike(action) {
    const data = action.payload
    if (action.payload.countLike === 0) {
        action.payload.countLike = 1
    } else {
        action.payload.countLike = 0
    }
    try {
        const res = yield axios.put(`http://localhost:5000/put/${action.payload._id}`, data)
        yield put({ type: COUNT_LIKE, payload: res.data });
    } catch (error) {
        console.log("error", error)
    }
}


// comment

function* addComment(action) {
    const data = {
        id: action.payload.id,
        commentClient: action.payload.dataInput,
        countLike: 0,
        feedback: []
    }
    try {
        const res = yield axios.post('http://localhost:5000/comment/add', data)
        yield put({ type: POST_COMMENT, payload: res.data });

    } catch (error) {
        console.log("error - getUser : ", error);
    }
}


function* getComment() {
    try {
        const res = yield axios.get('http://localhost:5000/comment')
        yield put({ type: GET_IN_COMMENT, payload: res.data });
    } catch (error) {
        console.log("error - getUser : ", error);
    }
}
export default function* rootSaga() {
    yield takeLatest(GET_COMMENT, getComment)
    yield takeLatest(ADD_COMMENT, addComment)
    yield takeLatest(COUNT_LIKE_API, putCountLike)
    yield takeLatest(ADD_NEWS, addNew)
    yield takeLatest(GET, getApi)
    yield takeLatest(DELETE_DB, deleteItem)
    // yield takeLatest(CHECK_DETAIL,)
}