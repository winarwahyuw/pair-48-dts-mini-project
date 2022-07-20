import React  from "react";
import MovieSlider from '../components/MovieSlider';
import Header from '../components/Header';

const MovieList = () => {
    const categories = [
        {title:"movie of the week", url:"trending/movie/week"},
        {title:"TV of the week", url:"trending/tv/week"}
    ]
    return(
        <div className="content">
            <Header />
            {categories.map((category, index)=>(
                <MovieSlider key={index} category={category}/>
            ))}
        </div>
    )
}


export default MovieList;