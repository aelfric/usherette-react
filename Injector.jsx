var React = require('react');

module.exports = React.createClass({
    contextTypes: {
        dispatch: React.PropTypes.func.isRequired,
        atom: React.PropTypes.any
    },

    propTypes: {
        actions: React.PropTypes.object
    },

    performAction: function(actionCreator, ...args) {
        const { dispatch } = this.context;
        const payload = actionCreator(...args);

        return typeof payload === 'function'
            ? payload(dispatch)
            : dispatch(payload);
    },
    render: function() {
        const { dispatch, atom } = this.context;
        const { actions: _actions } = this.props;

        const actions = Object.keys(_actions).reduce((result, key) => {
            result[key] = this.performAction.bind(this, _actions[key]);
            return result;
        }, {});

        return this.props.children({ actions, atom });
    }
});
