import React from "react";

function Card({ movies }) {
  return (
    <div className="container">
      <div className="row d-flex" style={{width:"100%", justifyContent:"space-evenly"}} >
        {movies !== undefined?
        (movies.map((movie) => (
          <div class="card" style={{height:"54vh", width:"300px",margin:"5px"}}>
            <img src={movie.Poster} class="card-img-top" alt="..." height="75%" width="100%"/>
            <div class="card-body">
              <h5 class="card-title" style={{fontSize:"1vw"}}>{movie.Title}</h5>
              <p class="card-text">
               {movie.Year}
              </p>
            </div>
          </div>
        ))):
        (<h3>No results found</h3>)
        }
      </div>
    </div>
  );
}

export default Card;
