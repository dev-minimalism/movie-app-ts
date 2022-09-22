import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    setIsLoading(true);
    const {
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    setMovies(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    void getMovies();
  }, []);

  return (
    <section className="container">
      {isLoading
        ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
          )
        : (
        <div className="movies">
          {movies.map((movie: any) => {
            return (
              <Movie
                key={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </div>
          )}
    </section>
  );
};

export default Home;
