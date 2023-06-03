import React, { useState } from 'react'
import NavbarStyles from "./CSS/navbar.module.css";
import Buttons from "./buttons";
import Notification from "./Notification";
import NextPage from './NextPage';
import Footer from './Footer';
import MoviesStyle from "./CSS/Movies.module.css"
import DetailsPagestyles from "./CSS/DefaultMovieDetailsPage.module.css";
import secondpage from "./CSS/SecondPageDetails.module.css";

var count = true;
var c =10 ;
const Navbar = () => {

    const [toggleButton, setToggleButton] = useState(true);
    const [notification_title, setTitle] = useState('');
    const [data, setData] = useState('');
    const [movies, movieData] = useState([]);
    const [open, openSet] = useState(true);

    const latesMoviesSearch = async (page = 1, limit = 5) => {
        toggleButton ? setToggleButton(false) : setToggleButton(true);
        let res = await fetch(`https://www.omdbapi.com/?apiKey=2f9f603c&s=${data}`);
        let res1 = await res.json();
        movieData(res1.Search);
        console.log(res1.Search);
        setTitle(data);
        openSet(false);
    }

    const [defaultData, defaultsetData] = useState([]);
    const [loding, setloding] = useState(true);
    const FetchFunction = async () => {
        var res = await fetch(`https://downlordhub-database.onrender.com/DefaultMovies`);
        var res1 = await res.json();
        defaultsetData(res1);
        count = false;
        setloding(false);
    }
    if (count == true) {
        FetchFunction();
    }

    const [moviesDetails, setMovieDetails] = useState(false);
    const [arr, setarr] = useState(true);
    const clickimage = (ele) => {
        openSet(false);
        setMovieDetails(true);
        setarr(ele);
    }

    const [nextPage, setNextPage] = useState(false);
    const[buttontext, setbuttontext] = useState(10) ;
    const secondPage = () => {
        setMovieDetails(false);
        setNextPage(true);
        setloding(true);
        
        var a = setInterval(() => {
            c = c-1 ;
            if( c == 0 ){
                setloding(false);
                clearInterval(a) ;
            }
            setbuttontext(c) ;
        }, 1000);
    }
    
    return (
        <>
            <div id={NavbarStyles.container}>
                <div className={NavbarStyles.left}>
                    <a href='/index.html'><img src='https://downloadhub.tools/wp-content/uploads/2017/03/downhub.png'></img></a>
                </div>
                <div className={NavbarStyles.mid}>
                    <a href='/index.html'>HOME</a>
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
            {loding ? <div className={NavbarStyles.loding_div}><img src='https://i.stack.imgur.com/hzk6C.gif' className={NavbarStyles.loding}></img></div> : ""}
            <div id={MoviesStyle.movies_container}>{
                movies.map((ele) =>
                    <div key={ele.Id}>
                        <img src={ele.Poster}></img>
                        <p>{ele.Title}</p>
                    </div>
                )
            }
            </div>
            {
                open ? <div id={MoviesStyle.movies_container} >{
                    defaultData.map((ele) =>
                        <div onClick={() => clickimage(ele)} key={ele.Id} >
                            <img src={ele.Poster}></img>
                            <p>{ele.Title}</p>
                        </div>
                    )
                }
                </div> : ""
            }
            {
                moviesDetails ? <div id={DetailsPagestyles.moviesDetails}>
                    <>
                        <div className={DetailsPagestyles.left_details}>
                            <h1 />{arr.Title}
                            <img src={arr.Poster} className={DetailsPagestyles.img}></img>
                            <p>IMBD Ratings:<span>{arr.imdbID}/10.</span></p>
                            <p>Directed:<span>{arr.Directed}</span></p>
                            <p>Relased Date:<span>{arr.Year}</span></p>
                            <p>Genres:<span>{arr.Type}</span></p>
                            <p>Languages:<span>{arr.Languages}</span></p>
                            <p>Film Stars:<span>{arr.Film_Stars}</span></p>
                            <p>Movie Name:<span>{arr.Title}</span></p>
                            <p>Movie Quality:<span>{arr.Movie_Quality}</span></p>
                            <p>File Size:<span>{arr.File_Size}</span></p>
                            <img src='https://i1.wp.com/i.imgur.com/1SbRyDY.png?fit=600%2C28' />
                            <p>Story:<span>{arr.Story_line}</span></p>
                            <img src={arr.big_img} className={DetailsPagestyles.big_img}></img>
                            <button onClick={()=>secondPage("OK,let's continue")} className={DetailsPagestyles.btn}>SINGLE DOWNLOAD LINKS</button>
                            <h1 />{arr.Title}
                            <img src='https://i.imgur.com/s8JKvN7.png'className={DetailsPagestyles.logo_img_three} ></img>
                        </div>
                        <div className={DetailsPagestyles.right_details}>
                            <p />Show your ads here...
                        </div>
                    </>
                </div> : ""
            }
            {nextPage ? <div id={secondpage.secondPage}>
                <div className={secondpage.heading} >
                    <p>FOREX TRADING</p>
                    <p>HOW FOREX WORKS</p>
                    <p>TIPS</p>
                    <p>TRADING GUIDES</p>
                    <p>CONTACTS US</p>
                </div>
                {loding?<div className={secondpage.a_div}><a className={secondpage.a} >Wait for few Seconds... {buttontext}</a></div>:<div className={secondpage.a2_div}><a href={arr.movie_drive_link} className={secondpage.a2} download={arr.Title} >😎😎My First Solo Project 😎😎</a></div> }
                </div> : ""}
            {loding ? "" : <NextPage />}
            <Footer />
        </>
    )
}

export default Navbar
