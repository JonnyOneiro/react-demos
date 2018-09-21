import React, { Component } from 'react';

class SignIn extends Component {
    constructor ( props ) {
        super ( props ); 
    
        this.state = {
            form: {
                email: '',
                password: '' 
            }
        }
    }

    handleChange ( event ) {
        const { name, value } = event.target;

        const { form } = this.state;

        this.setState({ form : { ...form, [name] : value }});
    }

    handleSubmit ( event ) {
        event.preventDefault();

        const newState = {
            form: {
                email:'',
                password: ''
            }
        }
        this.setState(newState);
    }

    render () {
        const { email, password } = this.state.form;

        return (
            <form onSubmit={( event ) => {this.handleSubmit( event )}}>
                <div>
                    <label>Email </label>
                    <input 
                        type="email"
                        name="email"
                        value={ email }
                        onChange= { ( event ) => this.handleChange( event )}
                    />
                </div>

                <div>
                    <label>password </label>
                    <input 
                        type="password"
                        name="password"
                        value={ value }
                        onChange= { ( event ) => this.handleChange( event )}
                    />
                </div>

                <button>Submit</button>

            </form>
        )
    }
}

 export default SignIn;
