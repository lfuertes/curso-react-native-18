import * as types from './types'

function setFetching(value) {
    return {
        type: types.HOUSES_SET_FETCHING,
        value: value
    }
}

export function setList(value) {
    return {
        type: types.HOUSES_UPDATE_LIST,
        value,
    }
}

export function setItem(value) {
    return {
        type: types.HOUSES_SET_ITEM,
        value
    }
}

export function fetchHousesList() {
    return (dispatch, getState, api) => {
        dispatch(setFetching(true))
        api
            .fetchHouses()
            .then( res => {
                dispatch(setFetching(false))
                dispatch(setList(res.data.records))
            })
            .catch( err => {
                dispatch(setFetching(false))
                console.log("fetchHousesList error: ", err)
            })  
    }
}
