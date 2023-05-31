import React from 'react'
import { useState } from 'react';
import MoviesStyle from "./CSS/Movies.module.css"
import DefaultMovieDeatailsPage from './DefaultMovieDeatailsPage';
import DetailsPagestyles from "./CSS/DefaultMovieDetailsPage.module.css" ;

var count = 0;
var arr = [];
const DefaultMovies = () => {
    const [defaultData, defaultsetData] = useState([]);
    const FetchFunction = async () => {
        var res = await fetch(`https://downlordhub-database.onrender.com/DefaultMovies`);
        var res1 = await res.json();
        defaultsetData(res1);
        // arr = res1 ;
        count++;
    }
    if (count == 0) {
        FetchFunction();
    }
    const [open, openSet] = useState(true);
    const [click, clickSet] = useState(true);
    const [details, setDetails] = useState(false);
    const clickimage = (ele) => {
        clickSet(false);
        openSet(false);
        setDetails(true);
        arr.push(ele) ;
        console.log(arr) ;
    }
    return (
        <>
            {
                open ? <div id={MoviesStyle.movies_container}>{
                    defaultData.map((ele) =>
                        <div onClick={()=>clickimage(ele)} key={ele.Id} >
                            <img src={ele.Poster}></img>
                            <p>{ele.Title}</p>
                        </div>
                    )
                }
                </div> : (false)
            }
            {
                details ? <div id={DetailsPagestyles.moviesDetails}>{
                    arr.map((ele) =>
                        <DefaultMovieDeatailsPage key={ele.Id} ele={ele} />
                    )
                }
                </div> : (false)
            }
        </>
    )
}

export default DefaultMovies
