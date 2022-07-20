import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import tmdb from '../apis/tmdb';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const Header = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      const fetchMovies = async () => {
          try {
              const fetchedMovies = await tmdb.get("discover/movie");
              setMovies(fetchedMovies.data.results);
              console.log("fetched movie ", fetchedMovies.data.results);
          } catch (error) {
              console.log(error);
          }
      };

      fetchMovies();
  }, []);

  return (
    <Container>
      <div className='header'>
        <Carousel>
          {movies.map((movie, index) =>(
            <Carousel.Item key={index}>
            <img
              className="header-img"
              src={`${BASE_IMAGE_URL}${movie.backdrop_path}`} 
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 className='movie-title'>{movie.title}</h2>
              <p className='movie-desc'>
                <span>Rating <Badge bg="light text-dark">{movie.vote_average}</Badge></span>
                <span>Release {movie.release_date}</span>
              </p>
              <Button href={`${"details/"}${movie.id}`} variant="warning">Details</Button>
            </Carousel.Caption>
          </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export default Header;