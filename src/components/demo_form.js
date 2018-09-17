import React, { Component } from 'react';

// 1.do I need component state? if yes class
// 2.do I need render component? if yes class

class DemoForm extends Component {
    constructor ( props ) {
        super ( props );

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted: ', this.state);

        this.setState({
            email: '',
            password: '',
            name: ''
        });
    }

    handleChange (event) {
        this.setState({
            [event.target.name] : event.target.value
        });
        
        // switch(event.target.name) {
        //     case 'email':
        //         this.setState({email: event.target.value});
        //         break;
        //     case 'password':
        //         this.setState({password: event.target.value});
        //         break;    
        //     case 'name':
        //         this.setState({name: event.target.value});
        //         break;    
        // }
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>

                <h1>Demo Form</h1>

                <div>
                    <label>Email </label>
                    <input 
                        type="text"
                        name='email'
                        value={ this.state.email }
                        onChange={ this.handleChange }   
                        autoComplete='off'
                    />
                </div>

                <div>
                    <label>Name </label>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                </div>

                <div>
                    <label>Password </label>
                    <input 
                        type="password" 
                        name='password'
                        value={ this.state.password } 
                        onChange={ this.handleChange }   
                    />
                </div>

                <button>Submit Form</button>

            </form>
        );
    }
}

export default DemoForm;
