import React, {Component} from 'react';
// import Emerson from './Emerson.jpg'

class NoodleComponent extends Component {
    componentDidMount = () => {
        window.Queueit.validateUser()
    }
    render() {
        return (
            <div>
                <h1>THIS IS NOODLES PAGE</h1>
            </div>
        )
    }
}
export default NoodleComponent;