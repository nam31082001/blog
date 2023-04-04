import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { ADD_IN_DATA, ADD_NEWS, DELETE_DB, GET, GET_IN_DATA } from "../redux/action";

function* addNew(action) {
    try {
       const res = yield axios.post('http://localhost:5000/add', action.payload)
       yield put({ type: ADD_IN_DATA, payload: res.data });

    } catch (error) {
        console.log("error - getUser : ", error);
    }


}
function* getApi(){
    try {
        const res = yield axios.get('http://localhost:5000/')
        yield put({ type:GET_IN_DATA, payload: res.data });
 
     } catch (error) {
         console.log("error - getUser : ", error);
     }
}

function* deleteItem(action){
    console.log(action.payload)
    try {
        const res = yield axios.delete(`http://localhost:5000/delete/${action.payload}`)
       console.log(res.data)
 
     } catch (error) {
         console.log("error - getUser : ", error);
     }
}
export default function* rootSaga() {
    yield takeLatest(ADD_NEWS, addNew)
    yield takeLatest(GET,getApi)
    yield takeLatest(DELETE_DB,deleteItem)
}