import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios'

function MoviesDetails(props) {
  const [movie, setMovie] = useState([]);
  const [coments, setComents] = useState([]);
  const [coment, setComent] = useState("");
  const [stats, setStats] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api.themoviedb.org/3/movie/'+props.id+'?api_key=8f781d70654b5a6f2fa69770d1d115a3')
      setMovie(result.data);
      loadComents()
    };
    fetchData();
  }, [props.id]);

  function loadComents(){
    const localComents = localStorage.getItem("coments")
    const coments = localComents? JSON.parse(localComents) : []
    setComents(coments)
  }

  function addComment(e) {
    e.preventDefault();
    coments.push({
      stats,
      coment
    })
    localStorage.setItem("coments", JSON.stringify(coments))
    loadComents()
  }

  return (
    <Fragment>
      <div>
        <div className="fixed-top bg-gradient-left">
        </div>
        <div className="row fixed-top">
          <div className="col"></div>
          <div className="image-cover-bg col animateFadeIn" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.poster_path}`}}></div>
        </div>
        <div className="detail-movie col-12 col-md-6">
          <h1>{movie.original_title}</h1>
          <div>{movie.release_date}</div>
          <div>{movie.vote_average} - {movie.vote_count} votos</div>
          <div>Details: {movie.overview}</div>

          <form onSubmit={addComment} className="mt-4 mb-4 row p-3">
            <div className="col-12 mb-2">
              <div className="row justify-content-center">
                <div className="col-3">Valoración: {stats}</div>
                <input onChange={e => setStats(e.target.value)} type="range" value={stats} min="0" max="10" step="1" className="form-control-range col-4"/>
              </div>
            </div>
            <input className="form-control col-6" value={coment} onChange={e => setComent(e.target.value)} type="text" />
            <button type="submit" className="btn btn-info ml-3 col">Añadir comentario</button>
          </form>
          <div>
            Comentarios
            {coments.length > 0 ? (
              <>
                {
                  coments.map( (com, key ) => (
                    <div key={key} className="coment-container mb-2">
                      <div className="coment-title">Anonimo - { parseFloat(com.stats).toFixed(1) }</div>
                      <div className="coment-detail">{ com.coment }</div>
                    </div>
                  ))
                }
              </>) : (
              <div className="text-muted">No hay comentarios.</div>
              )}
          </div>
        </div>
       
      </div>
    </Fragment>
  );
}

export default MoviesDetails;

