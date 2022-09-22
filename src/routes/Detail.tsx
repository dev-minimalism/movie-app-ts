import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === undefined) {
      navigate('/');
    }
  }, []);

  if (location.state != null) {
    return <span>{location.state.title}</span>;
  } else {
    return null;
  }
};

export default Detail;
