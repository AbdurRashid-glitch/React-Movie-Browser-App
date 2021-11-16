import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
  return (
      <div className="col-lg-3 col-md-3 col-2 my-4">
          <div className="card" >
      <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to={detailUrl} className="btn btn-primary">
          Show Details
        </Link>
      </div>
    </div>
      </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i}/>;
  });
  return (
    <div>
      <Hero text={title} />
      {resultsHtml &&
      <div className='container'>
          <div className="row">
              {resultsHtml}
          </div>
      </div>
      }
    </div>
  );
};

export default SearchView;

//TMDB api ket:cf0479547c6e8d92234107645a434be9

//Link Searches:https://api.themoviedb.org/3/search/movie?api_key=cf0479547c6e8d92234107645a434be9&language=en-US&page=1&include_adult=false
