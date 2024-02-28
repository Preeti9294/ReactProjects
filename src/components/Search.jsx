import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
function Search() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");

  const commands=[
    {
        command:"*",
        callback:()=>setSearch(transcript)
    }
  ]

  const {transcript}=useSpeechRecognition({commands});
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=f056e2f7`)
      .then((movieresponse) => {
        console.log(movieresponse.data.Search);
        setMovie(movieresponse.data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="container">
      <div className="search-bar">
        <h1>Movie App</h1>
        <div className="row d-flex" style={{justifyContent:"center"}}>
        <input
          type="text"
          value={search}
          placeholder="Search for a Movie"
          onChange={handleChange}
          className="form-control w-25"
        />
        <button className="btn btn-primary" style={{width:"4%"}}  onClick={SpeechRecognition.startListening}>
        <i className="fa-solid fa-microphone"></i>
        </button>
        </div>
        <Card movies={movie}/>
      </div>
    </div>
  );
}

export default Search;
