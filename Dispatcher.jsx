var React = require('react');

var dispatch = function(store, atom, action) {
      return store(atom, action);
}

module.exports = React.createClass({
    propTypes: {
        store: React.PropTypes.func.isRequired
    },
    childContextTypes: {
        dispatch: React.PropTypes.func,
        atom: React.PropTypes.any
    },
    getChildContext: function() {
        return {
            atom: this.state.atom,
            dispatch: this.dispatch.bind(this)
        };
    },
    getInitialState: function(){
        return { atom: dispatch(this.props.store, undefined, {}) }
    },
    dispatch: function(payload) {
        this.setState(prevState => ({
            atom: dispatch(this.props.store, prevState.atom, payload)
        }));
    },
    render: function() {
        return typeof this.props.children === 'function'
            ? this.props.children(this.state.atom)
            : this.props.children;
    }
});
