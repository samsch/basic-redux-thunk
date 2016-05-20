const React = require('react');
const { connect } = require('react-redux');
const PropTypes = React.PropTypes;
const { updateName } = require('../actions/UpdateAction');
const { getData } = require('../actions/AsyncData');

const App = React.createClass({

    render: function() {
        return (
            <div>
                <h1>{this.props.appName}</h1>
                <p>Welcome to the app!</p>
                <p>
                    <label>Change the app name: <input type="text" value={this.props.appName} onChange={(ev)=>this.props.dispatch(updateName(ev.target.value))} /></label>
                </p>
                <p>
                    {(()=>{
                        if(!this.props.asyncData) {
                            return (
                                <button onClick={()=>this.props.dispatch(getData())}>Click to load data</button>
                            );
                        }
                        if(this.props.asyncData.loading) {
                            return (
                                'Loading...'
                            );
                        }
                        return this.props.asyncData.data;
                    })()}
                </p>
            </div>
        );
    }
});

module.exports = connect(state=>state)(App);
