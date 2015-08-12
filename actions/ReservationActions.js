
import * as types from '../constants/ActionTypes.js';

export function addTicket(showId){
    console.log('ADD_TICKET');
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