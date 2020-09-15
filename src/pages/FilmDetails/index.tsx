import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import { MovieState } from '../../store/reducers/types';

import Player from '../../components/Player'
import { Container, Content, PlayerContainer, TextContainer } from './styles';

// const movie_test = {
//   id: 456,
//   backdrop_path: "/adZ9ldSlkGfLfsHNbh37ZThCcgU.jpg",
//   original_name: "The Simpsons",
//   vote_average: 7.6,
//   number_of_seasons: 22,
//   overview: "Les Simpson, famille américaine moyenne, vivent à Springfield. Homer, le père, a deux passions : regarder la télé et boire des bières. Mais son quotidien est rarement reposant, entre son fils Bart qui fait toutes les bêtises possibles, sa fille Lisa qui est une surdouée, ou encore sa femme Marge qui ne supporte pas de le voir se soûler à longueur de journée.",
//   first_air_date: "1989-12-16"
// }

const FilmDetails: React.FC = () => {
  const movie = useSelector<MovieState , MovieState["featuredMovie"]>(state => state.featuredMovie)
  const [url, setUrl] = useState<string>()

  useEffect(() =>{
    function url() {
      if (movie?.videos?.results[0]) {
        let urlPlay = movie?.videos?.results[0].key
        console.log('URL :', urlPlay)
      setUrl(urlPlay)
      } else {
        setUrl('jYFk1O_t43A')
      }
    }
    url()
  },[movie])

  return (
    <Container
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`
    }}
    >
      <Content>
        <PlayerContainer>
          <Player url={`https://www.youtube.com/watch?v=${url}`} />

        </PlayerContainer>

        <TextContainer>
          <h1 className="featured--name">{movie?.original_name}</h1>
            <div className="featured--info">
              <p className="featured--points">{movie?.vote_average} points</p>
              <p className="featured--year">{movie?.first_air_date.slice(0, 4 )}</p>
              <p className="featured--seasons">{movie?.number_of_seasons} saison{movie?.number_of_seasons !== 1 ? 's': ''}</p>
            </div>
          <span className="featured--overview">{movie?.overview}</span>
        </TextContainer>
      </Content>

    </Container>
  );
};

export default FilmDetails;
