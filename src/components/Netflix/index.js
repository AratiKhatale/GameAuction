import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MoviesRow from './MoviesRow';
import TrendingMovies from './TrendingMovies';
import MiniDrawer from './Sidebar';
import Header from './Header';
const Netflix = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
    const [headerList, setHeaderList] = useState([]);
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: 'c01606126086830b8444f2b9643dfb22',
              language: 'en-US',
              page: 1,
            },
          }
        );
        setHeaderList(response.data.results);
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      }
    };

    fetchNowPlaying();
  }, []);
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/now_playing',
          {
            params: {
              api_key: 'c01606126086830b8444f2b9643dfb22',
              language: 'en-US',
              page: 1,
            },
          }
        );
        setNowPlaying(response.data.results);
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      }
    };

    fetchNowPlaying();
  }, []);

  return (
    <div>
        <Header  movies={headerList}/>
        <MiniDrawer />
      <MoviesRow title="New This Week" movies={nowPlaying} />
      <TrendingMovies  />
    </div>
  );
};

export default Netflix;
