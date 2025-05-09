import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Movie.css'

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/trending/movie/week',
                    {
                        params: {
                            api_key: 'c01606126086830b8444f2b9643dfb22', // Replace with your TMDb API key
                        },
                    }
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        };

        fetchTrendingMovies();
    }, []);

    return (
        <div className="movies-row-container">
        <h2 className="movies-row-title">Trending Now</h2>
        <div className="movies-thumbnails">
            {movies.map((movie) => (
                <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    key={movie.id}
                    className="movie-thumbnail"
                />
            ))}
        </div>
    </div>

    );
};

export default TrendingMovies;

