import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

const Login = props => {
    return (
        <div>
            <p>Welcome back, {props.user}!</p>
            <button onClick={() => props.login('Bob the Hacker')}>Login</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state.user.username
    }
}

export default connect(mapStateToProps, {
    login: login
})(Login);
