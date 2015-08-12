import {ADD_TICKET, REMOVE_TICKET} from '../constants/ActionTypes.js';

const initialState = [0,0,0]

export default function tickets(state = initialState, action){
    var newState = [];
    for (var i = 0; i<state.length; i++){
        newState[i] = state[i];
    }
    switch(action.type){
        case ADD_TICKET:
             newState[action.showId] += 1;
             return newState;
        case REMOVE_TICKET:
             newState[action.showId] -= 1;
             return newState;
        default:
             return newState;
    }
}
