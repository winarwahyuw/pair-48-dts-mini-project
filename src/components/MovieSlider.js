import { useEffect, useState } from 'react';
import tmdb from '../apis/tmdb';
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieSlider = ({ category }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get(category.url);
                setMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, [category]);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 4,
        lazyLoad: true,
        autoplay: false,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
        ]
    };
        
    return (
        <Container>
        <div className="movie-list">
            <h4 className="category-title">{category.title}</h4>
            <Slider {...settings}>
            {movies.map((movie, index) => (
                <Card key={index} className="text-white">
                    <Card.Img  src={`${BASE_IMAGE_URL}${movie.poster_path}`}  alt="Card image" className="img-movie"/>
                    <Card.ImgOverlay>
                    </Card.ImgOverlay>
                </Card>
            ))}
            </Slider>
        </div>
        </Container>
    )
}

export default MovieSlider;
