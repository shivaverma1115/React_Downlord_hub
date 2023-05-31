import React from 'react'
import { useState } from 'react';
import MovieDiv from './MovieDiv';

var count = 0 ;
const DefaultMovies=()=>{
    const [defaultData , defaultsetData] = useState([]) ; 
    const FetchFunction=async()=>{
        var res = await fetch(`https://downlordhub-database.onrender.com/DefaultMovies`) ;
        var res1 = await res.json() ;
        console.log(res1) ;
        defaultsetData(res1) ;
        count++ ;
    }
    if( count == 0 ){
        FetchFunction() ;
    }
    return (
        <div id='movies_container'>
            {
                defaultData.map((ele)=>
                    <MovieDiv key={ele.id} ele={ele}/>
                )
            }
        </div>
    )
}

export default DefaultMovies
