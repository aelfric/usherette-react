'use strict'

var React = require('react');
var ShowReservation = require('./ShowReservation.jsx');
var moment = require('moment');

module.exports = React.createClass({
    render: function(){
        var self = this;
        const {data, addTicket, removeTicket, tickets, initialTickets, ticketsRemaining} = this.props;
        var showList = data.tickets.map(function(ticket, index){
            return <ShowReservation 
                title={ticket.performance.show.title} 
                datetime={moment(ticket.performance.date).format('MMMM D, h:mm a')} 
            addTicket={addTicket}
            removeTicket={removeTicket}
            showId={index} 
            initialNumTickets = {ticket.quantity}
            changeNumTickets={tickets[index]} />
        });
        return (
                <div>
                <p>{data.order_firstname} {data.order_lastname}</p>
                <p>{data.payment_type}</p>
                {showList}
                <p>{ticketsRemaining} left</p>
                <button disabled={ticketsRemaining !== 0}>Save</button>
                </div>
               )
    }
})
