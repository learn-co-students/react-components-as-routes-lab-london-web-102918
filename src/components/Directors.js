import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director)=> (
        <div className='director'>
          <ul>
            <li>{director.name}</li>
            <li>{director.movies.join(', ')}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
