'use strict'

var React = require('react');
var ShowReservation = require('./ShowReservation.jsx');
var SaveButton = require('./SaveButton.jsx');
var moment = require('moment');

module.exports = React.createClass({
    contextTypes: {
        atom: React.PropTypes.any
    },
    render: function(){
        var self = this;
        const {tickets, addTicket, removeTicket} = this.props;
        const {atom} = this.context;
        var showList = atom.tickets.map(function(ticket, index){
            return <ShowReservation 
                title={ticket.performance.show.title} 
                datetime={moment(ticket.performance.date).format('MMMM D, h:mm a')} 
            showId={index} 
            ticket={ticket}
            addTicket={addTicket}
            removeTicket={removeTicket}
            />
        });
        return (
                <div>
                <p>{atom.order_firstname} {atom.order_lastname}</p>
                <p>{atom.payment_type}</p>
                {showList}
                <SaveButton ticketsRemaining={atom.ticketsRemaining} />
                </div>
               )
    }
})
