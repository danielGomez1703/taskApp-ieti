import React, {Component} from 'react';

import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'

import Login from "./components/Login";
import logo from './logo.svg';
import TaskApp from './components/TaskApp';


localStorage.setItem("mail", "prueba@gmail.com");
localStorage.setItem("password", "prueba1234");


class App extends Component {
    
    constructor(props) {
    
        super(props);
        this.state = { isLogged: false };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {

        const LoginView = () => (
            <Login handleClick={this.handleClick} />
        );

        const TodoAppView = () => (
            <TaskApp />
        );

        const view = this.state.isLogged ? TodoAppView : LoginView
        
        return (
            <div className="App">

            <Router>
              

                    <br />
                    <br />
                       
                        <Route exact path="/" component={view} />
                    
                 
                     </Router>
            </div>
        );
    
    }

    handleClick(e) {
        this.setState({ isLogged: true })
    }


}

export default App;
