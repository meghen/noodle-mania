import React, {Component} from 'react';
// import Emerson from './Emerson.jpg'

class EmersonComponent extends Component {
      componentDidMount = () => {
        console.log('checking window', window);
        window.QueueIt.validateUser();
    }
    render() {
        return (
            <div>
                <h1>THIS IS EMERSONS PAGE</h1>
            </div>
        )
    }
}
export default EmersonComponent;
