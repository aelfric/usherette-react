'use strict'
var React = require('react')
var Injector = require('./Injector.jsx')
var Dispatcher = require('./Dispatcher.jsx')
var WillCallList = require('./components/WillCallList.jsx')
import data from './will-call-data.js';

var store = function(state=[], action){
    return state
}
var actions = {};
React.render(
        <Dispatcher store={store}>{() => (
                <Injector actions={actions}>
                {({actions, atom}) => (
                        <WillCallList
                        />)}
                </Injector>)}
        </Dispatcher>, document.getElementById('content'))
