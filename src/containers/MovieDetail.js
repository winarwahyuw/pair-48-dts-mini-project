import React  from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import Container from 'react-bootstrap/Container';
import MovieList from './MovieList';


const MovieDetail = () => {
    const { id } = useParams();
    return(
        <Container>
            <Detail id={id} />
        </Container>
    )
}


export default MovieDetail;