import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useEffect, useState } from 'react';
import tmdb from '../apis/tmdb';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Description from './Description';


const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const Detail = ({id}) => {
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovie = await tmdb.get(`/movie/${id}`);
                setMovie(fetchedMovie.data);
                setGenres(fetchedMovie.data.genres);
                console.log(fetchedMovie.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, [id]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const fetchedVideos = await tmdb.get(`/movie/${id}/videos`);
                setVideos(fetchedVideos.data.results);
                console.log("videos"+fetchedVideos.data.results[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchVideos();
    }, [id]);

  return (
    <div className="details">
        <Card className="details-card">
        <Card.Img className="details-img" src={`${BASE_IMAGE_URL}${movie.backdrop_path}`} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Body>
                <h1 className='movie-title'>{movie.title}</h1>
                <p className='movie-desc'>{movie.overview}</p>
                <p>
                    {genres.map((genre, index)=>(
                        <Badge bg='secondary' key={index}>{genre.name}</Badge>
                    ))}
                </p>
                <DropdownButton
                    variant="warning"
                    title="Watch Now"
                    id="input-group-dropdown-1"
                    >
                    {videos.map((video, index)=>(
                        <Dropdown.Item key={index} href={`/videos/${video.key}`}>{video.size}</Dropdown.Item>
                    ))}
                </DropdownButton>
            </Card.Body>
        </Card.ImgOverlay>
        </Card>

        <Description movie={movie} />
    </div>
  );
}

export default Detail;