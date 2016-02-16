'use strict';

function ReactLifeCycle(tag, level) {
    var prefix = '|___';
    level = level||0;
    while (level--) {
        prefix += '___'
    }
    prefix += ': ['+tag+']:';

    return {
        getInitialState: function(){
            console.log(prefix+'getInitialState');
            return {};
        },

        getDefaultProps: function(){
            console.log(prefix+'getDefaultProps');
            return {};
        },

        componentWillMount: function(){
            console.log(prefix+'componentWillMount');
        },

        componentDidMount: function(){
            console.log(prefix+'componentDidMount');
        },

        componentWillReceiveProps: function(nextProps){
            console.log(prefix+'componentWillReceiveProps[nextProps:', nextProps, ']');
        },

        shouldComponentUpdate: function(nextProps, nextState){
            console.log(prefix+'shouldComponentUpdate[nextProps:', nextProps, 'nextState:', nextState, ']');
            return true;
        },

        componentWillUpdate: function(nextProps, nextState){
            console.log(prefix+'componentWillUpdate[nextProps:', nextProps, 'nextState:', nextState, ']');
        },

        componentDidUpdate: function(prevProps, prevState){
            console.log(prefix+'componentDidUpdate[prevProps:', prevProps, 'prevState:', prevState, ']');
        },

        componentWillUnmount: function(){
            console.log(prefix+'componentWillUnmount');
        }
    }
};

module.exports = ReactLifeCycle;
