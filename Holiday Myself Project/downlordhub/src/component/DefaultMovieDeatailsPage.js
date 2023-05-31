import React, { useState } from 'react'
import DetailsPagestyles from "./CSS/DefaultMovieDetailsPage.module.css" ;

const DefaultMovieDeatailsPage=({ele}) =>{
  const {Id, Poster,Directed,Story_line, big_img , movie_drive_link,Languages ,Film_Stars ,Movie_Quality ,File_Size, Title, Type, Year, imdbID } = ele;
  // console.log(imdbID) ;
  const[secondP,secondePset]= useState(true) ;
  const secondPage=()=>{
    secondePset(false) ;
  }
  return (
    <>
      {
        secondP ? <><div className={DetailsPagestyles.left_details}>
        <h1/>{Title}
        <h3/>{File_Size}
        <img src={Poster} className={DetailsPagestyles.img}></img>
        <p>IMBD Ratings:<span>{imdbID}/10.</span></p>
        <p>Directed:<span>{Directed}</span></p>
        <p>Relased Date:<span>{Year}</span></p>
        <p>Genres:<span>{Type}</span></p>
        <p>Languages:<span>{Languages}</span></p>
        <p>Film Stars:<span>{Film_Stars}</span></p>
        <p>Movie Name:<span>{Title}</span></p>
        <p>Movie Quality:<span>{Movie_Quality}</span></p>
        <p>File Size:<span>{File_Size}</span></p>
        <img src='https://i1.wp.com/i.imgur.com/1SbRyDY.png?fit=600%2C28'/>
        <p>Story:<span>{Story_line}</span></p>
        <img src={big_img} className={DetailsPagestyles.big_img}></img>
        <a href={movie_drive_link} downlord={Title} ><button onClick={secondPage}>SINGLE DOWNLOAD LINKS</button></a>
        <h1/>{Title}
        <img src='https://i.imgur.com/s8JKvN7.png' ></img>
     </div>
     <div className={DetailsPagestyles.right_details}>
        <p/>Show your ads here...
     </div> 
     </>:(true) 
      }
    </>
  )
}

export default DefaultMovieDeatailsPage
