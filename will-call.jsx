'use strict'
var React = require('react')
var Injector = require('./Injector.jsx')
var Dispatcher = require('./Dispatcher.jsx')
var WillCallList = require('./components/WillCallList.jsx')
import {claimedTickets, outstandingReservations, walkIns} from './stores/WillCallStore.js';
import data from './will-call-data.js';
import * as actions from './actions/WillCallActions.js';

var store = function(state=data, action){
    return Object.assign(
            {}, 
            state, 
            {
                tickets: claimedTickets(state.tickets, action),
                outstandingReservations: outstandingReservations(state.outstandingReservations, action),
                walkIns: walkIns(state.walkIns, action)
            });
}

React.render(
        <Dispatcher store={store}>{() => (
                <Injector actions={actions}>
                {({actions, atom}) => (
                        <WillCallList 
                        claimTicket={actions.claimTicket}
                        unclaimTicket={actions.unclaimTicket}
                        releaseTicket={actions.releaseTicket}
                        initCount={actions.initCount}
                        addWalkIn={actions.addWalkIn}
                        />)}
                </Injector>)}
        </Dispatcher>, document.getElementById('content'))
