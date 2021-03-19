import React, {Component} from 'react';
import '../css/Movie.css';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

const GENERIC_MOVIE_TITLE = "New Movie Title", GENERIC_MOVIE_SYNOPSIS = "New Movie Synopsis", GENERIC_MOVIE_YEAR = "New Movie Year", GENERIC_MOVIE_GENRE = "New Movie Genre";


class Movie extends Component {
    // // ignore constructor method for now
  constructor(props) {
    super(props);
    this.titleContent = React.createRef();
    this.synopsisContent = React.createRef();
    this.yearContent = React.createRef();
    this.genreContent = React.createRef();
    this.state = {
      title: GENERIC_MOVIE_TITLE,
      synopsis: GENERIC_MOVIE_SYNOPSIS,
      year: GENERIC_MOVIE_YEAR,
      genre: GENERIC_MOVIE_GENRE,
      editMode: false
    }
  }

  handleEdit() {
    this.setState({
      editMode: true
    });
  }
 
  handleSave() {
    this.setState({
      title: this.titleContent.current.value,
      synopsis: this.synopsisContent.current.value,
      year: this.yearContent.current.value,
      genre: this.genreContent.current.value,
      editMode: false
    });
  }

  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }

//   // render method return JSX
  	
render(){
    let titleElement, synopsisElement, yearElement, genreElement, buttonArea; 
    if (this.state.editMode){
      titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
      synopsisElement = <textarea ref={this.synopsisContent} className="synopsis-textarea" defaultValue={this.state.synopsis}></textarea>;
      yearElement = <textarea ref={this.yearContent} className="year-textarea" defaultValue={this.state.year}></textarea>;
      genreElement = <textarea ref={this.genreContent} className="genre-textarea" defaultValue={this.state.genre}></textarea>;
      buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
    }
    else{
      titleElement = <h5 className="card-title">{this.state.title}</h5>;
      synopsisElement = <p>{this.state.synopsis}</p>; 
      yearElement = <p>{this.state.year}</p>;
      genreElement = <p>{this.state.genre}</p>; 
      buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button>
      <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
      </div>;
    }
    return (
      <div className='col-sm-6'>
        <div className="card card-view">
          <div className="card-synopsis">
                {titleElement}
                {synopsisElement}
                {yearElement}
                {genreElement}
                {buttonArea}
          </div>
        </div>
    </div>
    );
  }
}

Movie.defaultProps = {
    title: "Title",
    synopsis: "Synopsis",
    year: "Year",
    genre: "Genre",
  };
   
  Movie.propTypes = {
    title: PropTypes.string
  };
  

export default Movie;