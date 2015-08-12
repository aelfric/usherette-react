'use strict'
var React = require('react')
var Cart = require('./components/Cart.jsx')
var Injector = require('./Injector.jsx')
var Dispatcher = require('./Dispatcher.jsx')
var tickets = require('./stores/TicketStore.js');
import * as actions from './actions/ReservationActions.js';

var store = function(state={}, action){
    return {tickets: tickets(state.tickets, action) }
}
React.render(
        <Dispatcher store={store}>{() => (
                <Injector actions={actions}>
                {({actions, atom}) => (
                        <Cart 
                        initialTickets={[4,7,0]}
                        tickets={atom.tickets}
                        addTicket={actions.addTicket} 
                        removeTicket={actions.removeTicket}/>)}
                </Injector>)}
        </Dispatcher>, document.getElementById('content'))
