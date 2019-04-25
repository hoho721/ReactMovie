import React, {Component} from 'react';
import './App.css';
import Movie from './Components/Movie';

class App extends Component {

    state = {};

    componentDidMount() {
        this._fetchMovies('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    }

    _renderMovies = () => {
        return this.state.movies.map(movie =>
            <Movie
                title={movie.title}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                synopsis={movie.synopsis}
                key={movie.id}/>);
    };


    _fetchMovies = async (url) => {
        try {
            let movies = await this._callApi(url);
            console.log(movies);
            this.setState({
                movies
            })

        } catch (err) {
            console.log(err);
        }
    };

    _callApi = (url) => {
        return fetch(url)
            .then(response => response.json())
            .then(myJson => myJson.data.movies)
            .catch(err => {
                console.log(err)
            });
    };


    render() {
        const {movies} = this.state;
        return (
            <div className={movies ? "App" : "App--loading"}>
                {
                    movies ? this._renderMovies() : "Loading"
                }
            </div>
        )
    }
}

export default App;
