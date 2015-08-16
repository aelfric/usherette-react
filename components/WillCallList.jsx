var React = require('react');

module.exports = React.createClass({
    contextTypes: {
        atom: React.PropTypes.any,
        dispatch: React.PropTypes.func.isRequired
    },
    componentDidMount: function(){
        this.props.initCount();
    },
    render: function(){
        const {venueSize, walkIns, outstandingReservations, tickets} = this.context.atom;
        var list = tickets.map((ticket, index) => {
            return (<p>
                    <button onClick={this.props.claimTicket.bind(this, index)}>Claim</button>
                    <button onClick={this.props.unclaimTicket.bind(this, index)}>Unclaim</button>
                    <button onClick={this.props.releaseTicket.bind(this, index)}>Release</button>
                    <span>{ticket.name}</span> 
                    <span>{"(x)".repeat(ticket.numClaimed)}</span>
                    <span>{"()".repeat(ticket.quantity - ticket.numClaimed)}</span>
                    </p>);
        })
        var claimedTickets = tickets.reduce((a,b) => {return a + b.numClaimed},0);
        var tableRow = function(a,b){
            return <tr><td>{a}</td><td>{b}</td></tr>;
        }
        return <div>
            <button onClick={this.props.addWalkIn.bind(this)}>Add Walk-In</button>
            <table>
            <tbody>
            {tableRow("Outstanding Reservations:", outstandingReservations)}
            {tableRow("Walk-Ins:", walkIns)}
            {tableRow("Claimed Reservations:",claimedTickets)}
            {tableRow("Seats Remaining:" , venueSize - claimedTickets - outstandingReservations - walkIns)}
            </tbody>
            </table>
            {list}</div>
    }
})
