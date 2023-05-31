import React from 'react'
const Movies = ({ ele }) => {
  const {Id, Poster,Directed,Story_line, big_img , movie_drive_link,Languages ,Film_Stars ,Movie_Quality ,File_Size, Title, Type, Year, imdbID } = ele;
 console.log(Title) ;
  return (
    <div>
      <img src={Poster}></img>
      <p>{Title}</p>
    </div>
  )
}

export default Movies
