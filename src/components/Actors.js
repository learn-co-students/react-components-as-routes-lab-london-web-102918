import React, { Component } from 'react';
import { actors } from '../data';

class Actors extends React.Component {

  state = {
      actors: actors
  }

  render() {
  return (
    <div >
    <h1>Actors Page</h1>

        {actors.map((actor) => (
        <div className='actor'>
          <ul>
          <li>Name: {actor.name}</li>
          <li>Movies: {actor.movies.join(', ')}</li>
          </ul>
        </div>
        ))}
    </div>
    );
  }
};

export default Actors;
