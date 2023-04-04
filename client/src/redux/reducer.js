import { ADD_IN_DATA, GET_IN_DATA, DELETE_CLIENT } from "./action";

const initialState = {
    data: []
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IN_DATA:
            return { ...state, data: action.payload }
        case ADD_IN_DATA:
            const dataCopy = [...state.data, action.payload]
            return { ...state, data: dataCopy };
        case DELETE_CLIENT:
            const dataNewDelete=[...state.data].filter(item=>item._id!==action.payload)
            return { ...state, data: dataNewDelete }
        default:
            return state;
    }
}
export default rootReducer