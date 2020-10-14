import React, {Component} from 'react';
// import Emerson from './Emerson.jpg'
// import ArtistListItem from './ArtistListItem';
// import axios from 'axios';
import {connect} from 'react-redux';

class EmersonComponent extends Component {
      componentDidMount = () => {
       console.log('checking window', window);
       window.QueueIt.validateUser();
    }
    // componentDidMount() { // react Component method
    //     console.log('checking window', window);
    //     window.QueueIt.validateUser();
    //     this.refreshArtists();
    //   }
    
    //   refreshArtists = () => {
    //     // just like $.ajax()
    //     axios({
    //       method: 'GET',
    //       url: '/#/emerson'
    //     }).then((response) => {
    //       console.log(response);
    //       // response.data will be the array of artists
    //       this.props.dispatch({
    //         type: 'GET_ARTISTS',
    //         payload: response.data
    //       })
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
                {/* {this.createArtistList()} */}
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) =>({
    reduxState
  })
export default connect(putReduxStateOnProps)(EmersonComponent);
