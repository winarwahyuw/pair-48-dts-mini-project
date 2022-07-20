import React from 'react';
import Card from 'react-bootstrap/Card';

const Description = ({movie}) => {
    return(
        <div className='description'>
        <div className='desc-card'>
            <Card.Title>
                Description
            </Card.Title>
            <Card.Body>
                <p>Original Language : {movie.original_language}</p>
                <p>Homepage : {movie.homepage}</p>
                <p>Overview : {movie.overview}</p>
                <p>Status : {movie.status}</p>
                <p>Vote Average : {movie.vote_average}</p>
            </Card.Body>
        </div>
        </div>
    )
}


export default Description;