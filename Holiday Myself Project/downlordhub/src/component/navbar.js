import React, { useState } from 'react'
import NavbarStyles from "./CSS/navbar.module.css";
import Movies from "./Movies";
import Buttons from "./buttons";
import Notification from "./Notification";
import DefaultMovies from './DefaultMovies';
import NextPage from './NextPage';
import Footer from './Footer';
import MoviesStyle from "./CSS/Movies.module.css"
var count = 0;
const Navbar = () => {

    const[toggleButton,setToggleButton] = useState(true) ;
    const [notification_title, setTitle] = useState('');
    const [data, setData] = useState('');
    const [movies, movieData] = useState([]);

    const latesMoviesSearch = async (page=1 , limit=5) => {
        toggleButton?setToggleButton(false):setToggleButton(false) ;
        let res = await fetch(`https://www.omdbapi.com/?apiKey=2f9f603c&s=${data}`);
        let res1 = await res.json();
        movieData(res1.Search);
        console.log(res1.Search) ;
        setTitle(data);
    }
    // ?_page=${page}&_limit=${limit}

    return (
        <>
            <div id={NavbarStyles.container}>
                <div className={NavbarStyles.left}>
                    <img src='https://downloadhub.tools/wp-content/uploads/2017/03/downhub.png'></img>
                </div>
                <div className={NavbarStyles.mid}>
                    <a href='#'>HOME</a>
                    <a href='#'>300MB Movies</a>
                    <a href='#'>Bollywood Movies</a>
                    <a href='#'>Dual Audio & Dubbed</a>
                </div>
                <div className={NavbarStyles.right}>
                    <input placeholder='Search Here...' value={data} onChange={(e) => setData(e.target.value)} />
                    <button onClick={latesMoviesSearch}>Search</button>
                </div>
            </div>
            <Buttons />
            <Notification notification_title={notification_title} />
            <div id={MoviesStyle.movies_container}>
                {
                    movies.map((ele) =>
                        <Movies key={ele.Id} ele={ele} />
                    )
                }
            </div>
            {toggleButton?<DefaultMovies/>:""}
            <NextPage/>
            <Footer/>
        </>
    )
}

export default Navbar
