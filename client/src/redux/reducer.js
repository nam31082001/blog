import { ADD_IN_DATA, GET_IN_DATA, DELETE_CLIENT, COUNT_LIKE, CHECK_DETAIL, CLOSE_DETAIL, GET_IN_COMMENT, POST_COMMENT } from "./action";

const initialState = {
    data: [],
    detail: {},
    checkDetail: false,
    comment: []

};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IN_DATA:
            return { ...state, data: action.payload }
        case ADD_IN_DATA:
            const dataCopy = [...state.data, action.payload]
            return { ...state, data: dataCopy };
        case DELETE_CLIENT:
            const dataNewDelete = [...state.data].filter(item => item._id !== action.payload)
            return { ...state, data: dataNewDelete }
        case COUNT_LIKE:
            const id = action.payload._id
            const dataCopyLike = [...state.data]
            dataCopyLike.map(item => {
                if (item._id === id) {
                    item.countLike = action.payload.countLike
                }
            })
            return { ...state, data: dataCopyLike }
        case CHECK_DETAIL:
            return { ...state, detail: action.payload, checkDetail: true }
        case CLOSE_DETAIL:
            return { ...state, checkDetail: false }
        // comment
        case GET_IN_COMMENT:
            return { ...state, comment: action.payload }
        case POST_COMMENT:
            return { ...state, comment: [...state.comment, action.payload] }
        default:
            return state;
    }
}
export default rootReducer