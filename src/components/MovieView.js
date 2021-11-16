import React, { useState } from 'react'
import Hero from './Hero'
import { useParams } from 'react-router'
import { useEffect  } from 'react'

const MovieView = () => {
    const {id} = useParams()
    console.log(id)

    const [movieDetails, setMovieDetails ] = useState({})
    const [isLoading, setIsLoading ] = useState({})

    useEffect(()=>{
        //console.log('make an api requestr', id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cf0479547c6e8d92234107645a434be9&language=en-US`)
        .then(response => response.json())
        .then(data=> {
            setMovieDetails(data)
            setIsLoading(false)
        })
    }, [id])

    function renderMovieDetails(){
        if(isLoading){
            return <Hero text ="Loading..."/>
        }
        if(movieDetails){
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            return(
                <>
                <Hero text={movieDetails.original_title}/>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
                        </div>
                        <div className="col-md-9">
                            <h2>{movieDetails.original_title}</h2>
                            <p className="lead">
                                {movieDetails.overview}
                            </p>
                        </div>
                    </div>

                </div>
                </>
            ) 
        }
    }
    return renderMovieDetails()
}

export default MovieView
