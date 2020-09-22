import React from 'react'

import { Link } from 'react-router-dom'

import { Container, ButtonsContainer } from './styles'

interface FeatureProps {
  item?:{
    id: string;
    backdrop_path: string;
    original_name: string;
    name: string;
    vote_average: number;
    number_of_seasons: number;
    overview: string;
    first_air_date?: string;
    release_date?: string;
    media_type?: string;
    genres: [{
      id: number;
      name: string;
    }]
  } | null | undefined
}

const FeaturedMovie: React.FC<FeatureProps> = ({item}) => {
  let genres: string[] = []

  item?.genres.forEach(element => genres.push(element.name))

  let description = item?.overview
  if (description && description?.length > 200) {
    description = description?.substring(0, 350)+'...'
  }

  return (
    <Container
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item?.backdrop_path})`
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <h1 className="featured--name">{item?.name}</h1>
          <div className="featured--info">
            <p className="featured--points">{item?.vote_average} points</p>
            <p className="featured--year">{item?.first_air_date.slice(0, 4 )}</p>
            <p className="featured--seasons">{item?.number_of_seasons} saison{item?.number_of_seasons !== 1 ? 's': ''}</p>
          </div>

          <span className="featured--overview">{description}</span>

          <ButtonsContainer>
            {/* <a href={`/watch/${item?.id}`} className="featured--watchbutton">Regarder</a> */}
            <Link to="/details"
              className="featured--watchbutton">Regarder</Link>
            <Link to={`/list/add/${item?.id}`}className="featured--mylistbutton">+ Ma Liste</Link>
          </ButtonsContainer>

          <p className="featured--genres"><strong>Genres: </strong>{genres.join(', ')}</p>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedMovie;
