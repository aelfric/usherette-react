'use strict'

var React = require('react');

module.exports = React.createClass({
    render: function(){
        const {title, datetime, numTickets, showId, addTicket, removeTicket} = this.props;
        return (
                <p>{title} - {datetime} <span>{numTickets}</span>
                <button onClick={addTicket.bind(this, showId)}>+</button>
                <button onClick={removeTicket.bind(this, showId)}>-</button></p>
               )
    }
})
