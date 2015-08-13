'use strict'

var React = require('react');

module.exports = React.createClass({
    render: function(){
        const {title, datetime, initialNumTickets, changeNumTickets, showId, addTicket, removeTicket} = this.props;
        return (
                <p>{title} - {datetime} <span>{initialNumTickets + changeNumTickets}</span>
                <button onClick={addTicket.bind(this, showId, initialNumTickets, changeNumTickets)}>+</button>
                <button onClick={removeTicket.bind(this, showId, initialNumTickets, changeNumTickets)}>-</button></p>
               )
    }
})
