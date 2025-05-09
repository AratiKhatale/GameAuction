// import React from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css'; // You can also use /css/skyblue or /css/sea-green for themes
// import './Movie.css';

// const Header = ({movies}) => {
//   return (
//     <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
//       {/* Background Image (Second Image) */}
//       {/* <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqM_SqxW2mttkTRYwsGI4XJX1XlU66vAeNw&s"
//         alt="background"
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//         //   height: '100%',
//           objectFit: 'cover',
//           zIndex: 0,
//         }}
//       /> */}
  
//        <div className="movies-slider-wrapper">
//                       <Splide
//                           className="custom-movie-slider"
//                           options={{
//                               perPage: 5,
//                               gap: '1rem',
//                               arrows: true,
//                               pagination: false,
//                               type:'loop',
//                               drag:'free',
//                               focus:'center',
//                               autoScroll: {
//                                 speed: 1,
//                               },
//                               padding: 0, // Adds internal spacing before/after slides
//                               breakpoints: {
//                                   1024: { perPage: 3 },
//                                   640: { perPage: 2 },
//                                   480: { perPage: 1 },
//                               },
//                           }}
//                       >
      
//                           {movies.map((movie) => (
//                               <SplideSlide key={movie.id}>
//                                   <img
//                                       src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                                       alt={movie.title}
//                                       className="movie-thumbnail"
//                                   />
//                               </SplideSlide>
//                           ))}
//                       </Splide>
//                   </div>

//       {/* Foreground Image (First Image) */}
//       <img
//         src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE5zOfEcvR7A5xarlCDRBXWhd4OwF2n7hnVltwHUC0PmJm4Hwr"
//         alt="foreground"
//         style={{
//           position: 'relative',
//           height: '100%',
//           objectFit: 'cover',
//           zIndex: 1,
//           paddingLeft: '56px',
//           boxShadow: '37px 0px 20px #000000'

//         }}
//       />
//     </div>
//   );
// };

// export default Header;


import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import './Movie.css';

const Header = ({ movies }) => {
  return (
    <div style={{ display: 'flex', width: '100%', height: '300px', overflow: 'hidden' }}>
       <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE5zOfEcvR7A5xarlCDRBXWhd4OwF2n7hnVltwHUC0PmJm4Hwr"
        alt="foreground"
        style={{
          width: '50%',
          height: '100%',
          objectFit: 'cover',
          boxShadow: '-37px 0px 20px #000000',
        }}
      />
      {/* Left side: Slider (50% width) */}
      <div className="movies-slider-wrapper" style={{ width: '50%', position: 'relative' }}>
        <Splide
          className="custom-movie-slider"
          options={{
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 3,
            arrows: false,
            pagination: false,
            gap: '1rem',
            autoScroll: {
              speed: 0.5,
            },
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
          extensions={{ AutoScroll }}
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

      {/* Right side: Foreground image (50% width) */}
     
    </div>
  );
};

export default Header;
