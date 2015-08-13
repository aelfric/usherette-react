'use strict'
var React = require('react')
var Cart = require('./components/Cart.jsx')
var Injector = require('./Injector.jsx')
var Dispatcher = require('./Dispatcher.jsx')
import {tickets, ticketsRemaining} from './stores/TicketStore.js';

import data from './data.js';
import * as actions from './actions/ReservationActions.js';

var store = function(state={}, action){
    return {tickets: tickets(state.tickets, action),
    ticketsRemaining: ticketsRemaining(state.ticketsRemaining, action)}
}
React.render(
        <Dispatcher store={store}>{() => (
                <Injector actions={actions}>
                {({actions, atom}) => (
                        <Cart 
                        data={data}
                        tickets={atom.tickets}
                        ticketsRemaining={atom.ticketsRemaining}
                        addTicket={actions.addTicket} 
                        removeTicket={actions.removeTicket}/>)}
                </Injector>)}
        </Dispatcher>, document.getElementById('content'))
