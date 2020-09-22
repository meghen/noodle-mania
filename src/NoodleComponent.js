import React, {Component} from 'react';
import Emerson from './Emerson.jpg'

class NoodleComponent extends Component {
    // componentDidMount=()=>{
    //     window.QueueIt.validateUser();
    //     console.log(window);
        
    // }
    render() {
        return (
            <div>
                <h1>I know it says noodle, but the picture got lost so we're using emerson again</h1>
                <img src={Emerson} width="500" height="500"/>
            </div>
        )
    }
}
export default NoodleComponent;