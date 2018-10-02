import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tick, increaseDate } from '../actions';

class Clock extends Component {
    componentDidMount() {
        setInterval(this.props.tick, 1000)
    }
    render () {
        //console.log('clock props: ', this.props);

        const clockColor = {
            color: this.props.color,
            transitionDuration: '500ms'
        };

        return (
            <div>
                <h1>{this.props.date} <button onClick={() => this.props.increaseDate(1)}>Next Day</button></h1>
                <h1 style={clockColor}>{this.props.time}</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //console.log('Redux State: ', state);

    return {
        time: state.clock.currentTime,
        date: state.clock.date,
        color: state.clock.color
    }
}
export default connect(mapStateToProps, {
    tick: tick,
    increaseDate: increaseDate
})(Clock);

