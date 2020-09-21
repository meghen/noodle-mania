import React, {Component} from 'react';
import Emerson from './Emerson.jpg'

class EmersonComponent extends Component {
    componentDidMount=()=>{
        window.QueueIT.validateUser();
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