import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === undefined) {
      navigate('/');
    }
  }, []);

  if (location.state != null) {
    return (
      <div className="detail__container">
        <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
        <div className="movie__data">
          <h3 className="movie__title">Title : {location.state.title}</h3>
          <h5 className="movie__year">Year : {location.state.year}</h5>
          <ul className="movie__genres">
            {location.state.genres.map((genre: string, index: number) => {
              return (
                <li key={index}>{genre}</li>
              )
            })}
          </ul>
          <p>{location.state.summary}</p>
        </div>
      </div>
    )
  } else {
    return null;
  }
};

export default Detail;
