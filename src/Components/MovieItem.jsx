import React from 'react'

class MovieItem extends React.Component {
  render() {
    const { movie, isFavorite, removeFromFavorite, addToFavorite, deleteMovie } = this.props
    return (
      <div className="border-top" key={movie.id}>
        <h2>{movie.title}</h2>
        <p>
          {isFavorite(movie) ? (
            <button type="button" onClick={removeFromFavorite.bind(this, movie.id)}>Remove from favorite</button>
          ) : (
            <button type="button" onClick={addToFavorite.bind(this, movie.id)}>Add to favorite</button>
          )}
          <button type="button" onClick={deleteMovie.bind(this, movie.id)}>Delete</button>
        </p>
      </div>
    )
  }
}

export default MovieItem