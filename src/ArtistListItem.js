// ArtistListItem.js

import React, { Component } from 'react';
import axios from 'axios';

class ArtistListItem extends Component {
    deleteArtist = () => {
        axios({
            method: 'DELETE',
            url: `/artist/${this.props.artist.id}`
        }).then((response) => {
            this.props.refreshArtists();
        });
    }
    render() {
        return (
            <>
                <p>{this.props.artist.name}
                <button onClick={this.deleteArtist}>DELETE</button></p>
            </>
        );
    }
}

export default ArtistListItem;