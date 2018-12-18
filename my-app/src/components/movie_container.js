import React, { Component } from 'react';
import Movie from './movie';
import axios from 'axios';

class MoviesContainer extends Component {
    componentWillMount() {
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((resp) => {
            console.log('Resp:', resp.data.feed.entry);
        });
    }

    render() {
        return (
            <div>
                <h2>Movie Container</h2>
                <Movie />
            </div>
        )
    }
}

export default MoviesContainer;