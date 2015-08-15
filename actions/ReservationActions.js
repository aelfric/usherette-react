
import * as types from '../constants/ActionTypes.js';

export function addTicket(showId){
    return (dispatch, getState) => {
        const {ticketsRemaining} = getState();
        if (ticketsRemaining > 0){
            dispatch({
                type: types.ADD_TICKET,
                showId: showId
            })
        }
    }
}

export function removeTicket(showId){
    return (dispatch, getState) => {
        const {tickets} = getState();

        if ((tickets[showId].quantity + tickets[showId].delta) > 0) {
            dispatch({
                type: types.REMOVE_TICKET,
                showId: showId
            })
        }  
    }
}
