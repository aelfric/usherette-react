import {ADD_TICKET, REMOVE_TICKET} from '../constants/ActionTypes.js';

const initialState = [0,0,0]

export function tickets(state = initialState, action){
    var newState = [];
    for (var i = 0; i<state.length; i++){
        newState[i] = Object.assign({}, {delta: 0}, state[i]);
    }
    switch(action.type){
        case ADD_TICKET:
             newState[action.showId].delta += 1;
             return newState;
        case REMOVE_TICKET:
             newState[action.showId].delta -= 1;
             return newState;
        default:
             return newState;
    }
}
export function ticketsRemaining(state = 0, action){
    switch(action.type){
        case ADD_TICKET:
             return state - 1;
        case REMOVE_TICKET:
             return state + 1;
        default:
             return state;
    }
}
