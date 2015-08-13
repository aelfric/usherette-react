
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

export function removeTicket(showId, initialNumTickets, changeNumTickets){
    if ((initialNumTickets + changeNumTickets) > 0) {
        return {
            type: types.REMOVE_TICKET,
            showId: showId
        }
    } else {
        return {}
    }
}
