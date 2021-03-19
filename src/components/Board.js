// // you will always need to import React from react
// // import {Component} when building a class component
import React, {Component} from 'react';

// // importing our CSS file from src>css
import '../css/Board.css';
import Movie from './Movie';

class Board extends Component {
    // // constructor method available to us in class components
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  addMovies() {
    let movies = this.state.movies;
    movies.push(
      {
        id: Date.now()
      }
    );
    this.setState(
      {
        movies: this.state.movies
      }
    );
  }

  deleteMovie(id){
    let newMovieArr = this.state.movies;
    newMovieArr.map((movie, index) => {
      if (id === movie.id) {
        newMovieArr.splice(index,1);
      }
    });
    this.setState(
      {
        movies: newMovieArr
      }
    );
  }

  // // render method - render what is returned (JSX) onto the browser
  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {
              this.state.movies.map(movie => {
                return <Movie key={movie.id} id={movie.id} deleteHandler={this.deleteMovie.bind(this)} />
              })
            }
          </div>
        </div>
        <div>
          {this.state.description}
          	
          <button className="btn btn-success add-button" onClick={this.addMovies.bind(this)}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Board;