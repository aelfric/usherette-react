import * as types from '../constants/ActionTypes.js';

export function claimTicket(reservationId){
    return (dispatch, getState) => {
        const {tickets} = getState();
        if (tickets[reservationId].quantity > tickets[reservationId].numClaimed){
            dispatch({
                type: types.CLAIM_TICKET,
                reservationId: reservationId
            })
        }
    }
}

export function unclaimTicket(reservationId){
    return (dispatch, getState) => {
        const {tickets} = getState();
        if (tickets[reservationId].numClaimed > 0){
            dispatch({
                type: types.UNCLAIM_TICKET,
                reservationId: reservationId
            })
        }
    }
}
export function releaseTicket(reservationId){
    return (dispatch, getState) => {
        const {tickets} = getState();
        if (tickets[reservationId].quantity > tickets[reservationId].numClaimed){
            dispatch({
                type: types.RELEASE_TICKET,
                reservationId: reservationId
            })
        }
    }
}

export function initCount(){
    return (dispatch, getState) => {
        const {tickets} = getState();
        var numReservations = tickets.reduce((a,b) => {
            return a + b.quantity},0);
        dispatch({
            type: types.INIT_COUNT,
            numReservations: numReservations
        })
    }
}

export function addWalkIn(){
    return {
        type: types.ADD_WALK_IN
    }
}
