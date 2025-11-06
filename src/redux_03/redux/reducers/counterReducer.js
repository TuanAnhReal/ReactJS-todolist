import * as types from '../types'

const initialState = { // là state khoi tao quản ly bien dem
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return { ...state, count: state.count + action.payload }
        case types.DECREMENT:
            return { ...state, count: state.count - action.payload }
        default:
            return state;
    }
}

export default counterReducer;