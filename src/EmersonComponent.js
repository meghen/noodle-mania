import React, {Component} from 'react';
import Emerson from './Emerson.jpg'

class EmersonComponent extends Component {
    componentDidMount=()=>{
        window.QueueIt.validateUser();
        console.log(window);
        
    }
    render() {
        return (
            <div>
                <img src={Emerson} width="500" height="500"/>
            </div>
        )
    }
}
export default EmersonComponent;