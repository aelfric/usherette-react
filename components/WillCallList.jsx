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
            return (<tr>
                    <td>
                    <button onClick={this.props.claimTicket.bind(this, index)}>Claim</button>
                    <button onClick={this.props.unclaimTicket.bind(this, index)}>Unclaim</button>
                    <button onClick={this.props.releaseTicket.bind(this, index)}>Release</button>
                    </td>
                    <td>{ticket.name}</td>
                    <td>
                    <span className='fa icon-fooo'>{String.fromCharCode(0xf046).repeat(ticket.numClaimed)}
                    {String.fromCharCode(0xf096).repeat(ticket.quantity - ticket.numClaimed)}</span>
                    </td>
                    </tr>);
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
            <table>
            {list}
            </table></div>
    }
})
