import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // You can also use /css/skyblue or /css/sea-green for themes
import './Movie.css';

const MoviesRow = ({ title, movies }) => {
    return (
        <div className="movies-row-container">
            <h2 className="movies-row-title">{title}</h2>
            {/* <Splide
                options={{
                    perPage: 5,
                    gap: '1rem',
                    pagination: false,
                    arrows: true,
                    focus  : 0,
                    breakpoints: {
                        1024: {
                            perPage: 3,
                        },
                        640: {
                            perPage: 2,
                        },
                        480: {
                            perPage: 1,
                        },
                    },
                }}
                style={{display:'flex'}}
                aria-label={`${title} Movie Thumbnails`}
            >
                {movies.map((movie) => (
                    <SplideSlide key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            className="movie-thumbnail"
                        />
                    </SplideSlide>
                ))}
            </Splide> */}

            <div className="movies-slider-wrapper">
                <Splide
                    className="custom-movie-slider"
                    options={{
                        perPage: 5,
                        gap: '1rem',
                        arrows: true,
                        pagination: false,
                        focus:0,
                        padding: 0, // Adds internal spacing before/after slides
                        breakpoints: {
                            1024: { perPage: 3 },
                            640: { perPage: 2 },
                            480: { perPage: 1 },
                        },
                    }}
                >

                    {movies.map((movie) => (
                        <SplideSlide key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                                className="movie-thumbnail"
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>

        </div>
    );
};

export default MoviesRow;
