import React from 'react'

const MovieDiv=({ele})=> {
    const{id,title,url}= ele ;
    console.log(title) ;
  return (
    <div>
       <img src={url}></img>
       <p>{title}</p>
    </div>
  )
}

export default MovieDiv
