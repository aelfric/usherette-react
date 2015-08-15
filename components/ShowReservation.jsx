'use strict'

var React = require('react');

module.exports = React.createClass({
    render: function(){
        const {title, datetime, ticket, showId, addTicket, removeTicket} = this.props;
        return (
                <p>{title} - {datetime}
                <button onClick={removeTicket.bind(this, showId)}>-</button>
                <span className='numTickets'>{ticket.quantity + ticket.delta}</span>
                <button onClick={addTicket.bind(this, showId)}>+</button></p>
               )
    }
})
