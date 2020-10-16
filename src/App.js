import React, {Component} from 'react';
// import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import NoodleComponent from './NoodleComponent'
import EmersonComponent from './EmersonComponent'
import {connect} from 'react-redux';

class App extends Component {
  handleClick=()=>{
    //also route to a new page
    // this.history.push('/emerson')
    console.log('is there history?', this.history);
    
  }
    render() {
        return (
            <div>
                <Router>
                  <div className="App">
                    <h1>Who will it be?</h1>
                    <ul>
                      <li><Link to='/noodle'>Noodle</Link></li>
                      <li onClick={this.handleClick}><Link to='/emerson'>Emerson</Link></li>
                    </ul>
                    <Route exact path='/noodle' component={NoodleComponent}/>
                    <Route exact path='/emerson' component={EmersonComponent}/>
                  </div>
                </Router>
            </div>
        )
    }
}
export default connect()(App);