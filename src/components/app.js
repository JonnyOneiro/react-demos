import React from 'react';
import '../assets/css/app.css';
import Clock from './clock';
import Login from './login';

const App = () => (
    <div>
        <div className="app">
            <Login/>
            <Clock/>
        </div>
    </div>
);

export default App;
