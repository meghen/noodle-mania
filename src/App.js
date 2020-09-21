import React, {Component} from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import NoodleComponent from './NoodleComponent'
import EmersonComponent from './EmersonComponent'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
      <div className="App">
        <h1>Who will it be?</h1>
        <ul>
          <li><Link to='/noodle'>Noodle(KU)</Link></li>
          <li><Link to='/emerson'>Emerson(JS)</Link></li>
          {/* <li onclick={QueueIt.validateUser(true)}><Link to='/emerson'>Emerson(JS)</Link></li> */}
        </ul>
        <Route exact path='/noodle' component={NoodleComponent}/>
        <Route exact path='/emerson' component={EmersonComponent}/>
      </div>
    </Router>
            </div>
        )
    }
}
export default App;
