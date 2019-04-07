import React, { Component } from 'react'

import './../styles/bootstrap.min.css'
import moviesData from './../data/movies'
import MovieItem from './MovieItem'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: moviesData,
      favorites: []
    }
  }
  render() {
    const deleteMovie = movieId => {
      this.setState({
        movies: this.state.movies.filter(item => movieId !== item.id)
      })
      removeFromFavorite(movieId)
    }

    const removeFromFavorite = movieId => this.setState({
      favorites: this.state.favorites.filter(id => id !== movieId)
    })

    const addToFavorite = movieId => this.setState({
      favorites: [...favorites, movieId]
    })

    const { favorites, movies } = this.state
    const isFavorite = movie => favorites.find(id => id === movie.id)

    return (
      <div className="mt-5 container">
        <h1>Movies</h1>
        <div className="row">
          <div className="col">
            {(movies.length === 0) && (
              <p>Empty list</p>
            )}
            {(movies.length !== 0) && movies.map(movie => (
              <MovieItem
                key={movie.id}
                {...{
                    isFavorite,
                    movie,
                    deleteMovie,
                    removeFromFavorite,
                    addToFavorite
                }}
              />
            ))}
          </div>
          <div className="col text-right">
            <div><strong>Movies count:</strong> {movies.length}</div>
            <div><strong>Favorite:</strong> {favorites.length}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
