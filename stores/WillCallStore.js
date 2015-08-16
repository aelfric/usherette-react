import {CLAIM_TICKET, UNCLAIM_TICKET, RELEASE_TICKET, INIT_COUNT, ADD_WALK_IN} from '../constants/ActionTypes.js'; 

export function claimedTickets(state=[], action){
    var newState = []
    for (var i = 0; i < state.length; i++){
        newState[i] = Object.assign({}, {numClaimed: 0}, state[i])
    }
    switch(action.type){
        case CLAIM_TICKET:
            newState[action.reservationId].numClaimed += 1;
            return newState;
        case UNCLAIM_TICKET:
            newState[action.reservationId].numClaimed -= 1;
            return newState;
        case RELEASE_TICKET:
            newState[action.reservationId].quantity -= 1;
            return newState;
        case INIT_COUNT:
            return newState;
        default:
            return state;
    }
}

export function outstandingReservations(state=0, action){
    switch(action.type){
        case CLAIM_TICKET:
            return state-1;
        case RELEASE_TICKET:
            return state-1;
        case UNCLAIM_TICKET:
            return state+1;
        case INIT_COUNT:
            return action.numReservations;
        default:
            return state
    }
}

export function walkIns(state=0, action){
    switch(action.type){
        case ADD_WALK_IN:
            return state+1;
       default:
            return state;
    }
}
