import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios'

function Movies({ history }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=War')
      console.log(result)
      setMovies(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="movies-container">
        {movies && movies.map((mov, key) => (
          <div key={key} onClick={()=>  history.push( {
            pathname: '/movie',
            state: { id: mov.id }
          })} className="movie-box animateFadeIn box">
            <div className="m-img" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500${mov.poster_path}` }}>
            <div className="effect-glass"></div>

            </div>

            <div className="m-title">
              {mov.original_title}
            </div>
            <div className="m-date">
              {mov.release_date}
            </div>
          </div>
        ))}
      </div>
      
    </Fragment>
  );
}

export default Movies;

