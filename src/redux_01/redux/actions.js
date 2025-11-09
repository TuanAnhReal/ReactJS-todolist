import * as types from './types'

const increment = (data) => {
    return {
        type: types.INCREMENT,
        payload: data
    }
}

const decrement = (data) => {
    return {
        type: types.DECREMENT,
        payload: data
    }
}

export { increment, decrement };