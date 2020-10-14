import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { MovieState } from '../../store/reducers/types'
import TMDB from '../../services/TMDB'

import Player from '../../components/Player'
import AddButton from '../../components/AddButton'

import { Container, Content, BackImg, PlayerContainer, TextContainer, StarIcon } from './styles'

const FilmDetails: React.FC = () => {
  const dispatch = useDispatch()
  const movie = useSelector<MovieState , MovieState["featuredMovie"]>(state => state.featuredMovie)

  const [url, setUrl] = useState<string>()

  let genres: string[] = []

  movie?.genres.forEach(element => genres.push(element.name))

  useEffect(() =>{
    window.scrollTo(0, 0);
    async function url() {
      if (movie?.videos?.results[0]) {
        let urlPlay = movie?.videos?.results[0].key
        setUrl(urlPlay)

      } else {
        let englishVideoCode = await TMDB.getMovieInfo(movie.id, 'tv', 'en')

          if(englishVideoCode?.videos?.results[0]) {
            let key = englishVideoCode?.videos?.results[0].key
            setUrl(key)

          } else {
            setUrl('GV3HUDMQ-F8&ab')
          }
        }
      }

    url()
  },[movie])

  return (
    <Container>
      <BackImg
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`
          }}
      />
      <Content>
        <PlayerContainer>
          <Player url={`https://www.youtube.com/watch?v=${url}`} />
        </PlayerContainer>

        <TextContainer>
          {
            movie.name ?
              <h1 className="featured--name">{movie?.name}</h1>
            :
              <h1 className="featured--name">{movie?.title}</h1>
          }
          <div className="featured--info">
            <p className="featured--points">{movie?.vote_average} <StarIcon /></p>
            {
              movie?.first_air_date ?
                <p className="featured--year">{movie?.first_air_date.slice(0, 7)}</p>
              :
                <p className="featured--year">{movie?.release_date.slice(0, 7)}</p>
            }
            {
              movie?.number_of_seasons ?
              <p className="featured--seasons">{movie?.number_of_seasons} saison{movie?.number_of_seasons !== 1 ? 's': ''}</p>
              :
              <p className="featured--seasons">Cinema</p>
            }
          </div>
          <span className="featured--overview">{movie?.overview}</span>
          <p className="featured--genres">{genres.join(', ')}</p>
          <AddButton
            itemID={movie.id}
            onClick={() => {dispatch({type: 'SET_MYLIST', value: movie})}} />
        </TextContainer>
      </Content>

    </Container>
  );
};

export default FilmDetails;
