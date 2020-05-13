import React, { Fragment } from 'react';
import MovieDetails from './movie-details'
import Header from '../Header/header';

class Movie extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="content">
          <h1>Detalles de la pelicula</h1>
          <MovieDetails id={this.props.location.state.id} />
        </div>
      </Fragment>)
  }
}

export default Movie;

