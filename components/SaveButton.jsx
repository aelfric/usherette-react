var React = require('react');
var pluralize = function(word, count){
    if (count > 1){
        return count.toString() + " " + word + "s";
    } else {
        return count.toString() + " " + word;
    }
}
module.exports = React.createClass({
    render: function(){
        const {ticketsRemaining} = this.props;
        var message;
        if (ticketsRemaining !==0){
            message = <p><b>Warning:</b> You cannot change the total number of tickets
                reserved. You must reassign {pluralize("ticket", ticketsRemaining)}.</p>;
        }       
        return (
                <div>
                <button disabled={ticketsRemaining !== 0}>Save</button>
                {message}
                </div>
               );
    }
});
