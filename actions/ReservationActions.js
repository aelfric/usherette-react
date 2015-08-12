
import * as types from '../constants/ActionTypes.js';

export function addTicket(showId){
    return {
        type: types.ADD_TICKET,
        showId: showId
    }
}

export function removeTicket(showId){
    return {
        type: types.REMOVE_TICKET,
        showId: showId
    }
}
