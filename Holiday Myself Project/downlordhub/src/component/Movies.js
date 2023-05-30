import React from 'react'
import styles from "./Movies.css";
const Movies = ({ ele }) => {
  const { Poster, Title, Type, Year, imdbID } = ele;

  return (
    <div>
      <img src={Poster}></img>
      <p>{Title}</p>
    </div>
  )
}

export default Movies
