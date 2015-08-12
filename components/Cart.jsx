'use strict'

var React = require('react');
var ShowReservation = require('./ShowReservation.jsx');

var shows = [
{"title":"Hamlet", "date":"February 29, 8pm", "tickets":1},
{"title":"Hamlet","date":"February 30, 8pm", "tickets":2},
{"title":"Hamlet", "date": "February 31, 2pm", "tickets":5}];

module.exports = React.createClass({
    render: function(){
        var self = this;
        const {addTicket, removeTicket, tickets, initialTickets} = this.props;
        var showList = shows.map(function(show, index){
            return <ShowReservation 
                title={show.title} 
                datetime={show.date} 
            addTicket={addTicket}
            removeTicket={removeTicket}
            showId={index} 
            numTickets={show.tickets + tickets[index]} />
        });
        var ticketsRemaining = -1 * tickets.reduce(function(cv, pv) { return cv + pv});
        return (
                <div>
                {showList}
                <p>{ticketsRemaining} left</p>
                </div>
               )
    }
})
