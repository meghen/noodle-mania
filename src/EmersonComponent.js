import React, {Component} from 'react';
// import Emerson from './Emerson.jpg'
import ArtistListItem from './ArtistListItem';
import axios from 'axios';
import {connect} from 'react-redux';

class EmersonComponent extends Component {
    // state = {
    //     quote: ''
    // }
    //   componentDidMount = () => {
    //    console.log('checking window', window);
    //    window.QueueIt.validateUser();
    // }
    // componentDidMount() { // react Component method
    //     // console.log('checking window', window);
    //     // window.QueueIt.validateUser();
    //     this.refreshArtists();
    //     console.log('history in component did mount', this.history);
        
    //   }
    
    //   refreshArtists = () => {
    //     console.log('clicked emerson fired');
    //     axios({
    //       method: 'GET',
    //       url: '/test'
    //     }).then((response) => {
    //       console.log(response.data);
    //       this.setState({
    //           quote: response.data.quote
    //         })
    //     }).catch((err)=>{
    //     console.log('error: ', err)
    //     });
    // }
    //     createArtistList() {
    //         let artistListForDom = [];
    //         for(let i = 0; i < this.props.reduxState.artistReducer.length; i += 1) {
    //             let artist = this.props.reduxState.artistReducer[i];
    //             let artistRow = (<ArtistListItem key={i} refreshArtists={this.props.refreshArtists} artist={artist} />);
    //             artistListForDom.push(artistRow);
    //         }
    //         return artistListForDom;
    //     }
    render() {
        return (
            <div>
                <h1>THIS IS EMERSONS PAGE</h1>
                {/* {this.state.quote}
                {this.createArtistList()} */}
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) =>({
    reduxState
  })
export default connect(putReduxStateOnProps)(EmersonComponent);
