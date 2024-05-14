// Home.js
import React from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => {
  // Assuming movies is an array of movie objects with id and title
  const movies = []; // You need to fetch this data from somewhere

  return (
    <div>
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </div>
  );
};

export default Home;
