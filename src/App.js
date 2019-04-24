import React, { Component } from 'react';
import './App.css';
import Movie from './Components/Movie';

const movies = [
  {
    title: "Matrix",
    img: "http://image.cine21.com/resize/cine21/article/2014/1119/17_30_01__546c5509f27c1[H800-].jpg"
  },
  {
    title: "Full Metal Jacket",
    img: "http://image.cine21.com/resize/cine21/article/2014/1119/17_30_01__546c5509f27c1[H800-].jpg"
  },
  {
    title: "Holla",
    img: "http://image.cine21.com/resize/cine21/article/2014/1119/17_30_01__546c5509f27c1[H800-].jpg"
  }
];


class App extends Component {

  state = {
    greeting: 'Hello'
  }

  componentDidMount() {
  }

  render() {
    return (
        <div className="App">
          {this.state.greeting}
          {
            movies.map((movie, idx) => {
              return <Movie key={idx} title={movie.title} poster={movie.img}/>
            })
          }
        </div>
    )
  }
}

export default App;
