import React, { Component } from 'react'
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component {

    componentWillMount() {
        console.log('Movie - componentWillMount')
    }

    componentDidMount() {
        console.log('Movie - componentDidMount')
    }

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {

    static propTypes = {
        poster: PropTypes.string.isRequired
    };

    render() {
        return (
            <img src={this.props.poster}/>
        )
    }
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;
