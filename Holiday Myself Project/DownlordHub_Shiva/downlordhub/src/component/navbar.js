import React,{useState} from 'react'
import styles from "./navbar.css" ;
import Movies from "./Movies" ;
import Buttons from "./buttons" ;
import Notification from "./Notification" ;

const Navbar=() =>{   
    const [data,setData] = useState('') ;
    const [movies, movieData] = useState([]) ;
    const latesMoviesSearch =async()=>{
        let res = await fetch(`https://www.omdbapi.com/?apiKey=2f9f603c&s=${data}`) ;
        let res1 = await res.json() ;
        movieData(res1.Search) ;
        console.log(res1.Search) ;
    }
  return (
    <>
    <div id='container'>
        <div className='left'>
            <img src='https://downloadhub.tools/wp-content/uploads/2017/03/downhub.png'></img>
        </div>
        <div className='mid'>
            <a href='#'>HOME</a>
            <a href='#'>300MB Movies</a>
            <a href='#'>Bollywood Movies</a>
            <a href='#'>Dual Audio & Dubbed</a>
        </div>
        <div className='right'>
            <input placeholder='Search Here...' value={data} onChange={(e) => setData(e.target.value)}/>
            <button onClick={latesMoviesSearch}>Search</button>
        </div>
    </div>
    <Buttons/>
    <Notification/>
     <div id='movies_container'>
      {
         movies.map((ele)=>
            <Movies key={ele.id} ele = {ele}/>
         )
      }
     </div>
    </>
  )
}

export default Navbar
