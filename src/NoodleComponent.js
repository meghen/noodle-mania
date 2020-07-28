import React, {Component} from 'react';
import Noodle from './Noodle.jpg'

class NoodleComponent extends Component {
    render() {
        return (
            <div>
                <img src={Noodle} width="500" height="600"/>
            </div>
        )
    }
}
export default NoodleComponent;