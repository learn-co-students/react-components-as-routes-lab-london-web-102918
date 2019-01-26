import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie)=> (
              <div className='movie'>
                <ul>
                  <li>{movie.title}</li>
                  <li>{movie.time}</li>
                  <li>{movie.metascore}</li>
                  <li>{movie.genres.join(', ')}</li>
                </ul>
              </div>
            ))}
    </div>
  );
};

export default Movies;
