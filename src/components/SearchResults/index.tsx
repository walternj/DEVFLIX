import React, { useLayoutEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import TMDB from '../../services/TMDB'

import { Container } from './styles'

interface SearchResult{
  id: number;
  backdrop_path: string;
  poster_path: string;
  name?: string;
  original_name?: string;
  title?: string;
  original_title?: string;
  vote_average: number;
  number_of_seasons: number;
  overview: string;
  first_air_date?: string;
  release_date?: string;
  media_type?: string;
  genres: [{
    id: number;
    name: string;
  }],
  videos?:{
    results:[{
      key: string
    }]
  }
}

interface Props {
  keyword : string
}

const SearchResults: React.FC<Props> = ({keyword}) => {
  const [resultList, setResultList] = useState<SearchResult[]>()

  const dispatch = useDispatch()
  const history = useHistory()

  useLayoutEffect(() => {
    async function SearchByKeyword () {
      const container = document.getElementById('container')

      if (keyword) {
        let response1 = await TMDB.getMovieByKeyWord(keyword)

        let response2 = await TMDB.getMovieByKeyWord(keyword, 2)

        setResultList([...response1.results, ...response2.results])
        if (response1.results.length > 10) {

          container.style.height = "100vh"
          container.style.top = "70px"

        } else {
          container.style.height = "0"
          container.style.top = "-70px"
        }
      } else {
        setResultList([])
        container.style.height = "0"
        container.style.top = "-70px"
      }
    }

    SearchByKeyword()
  },[keyword])

  const handleClick = useCallback (async(id: number, media_type: string) => {

    let chosenInfo =  await TMDB.getMovieInfo(id, media_type)

    console.log('CHOSEN_ITEM :', chosenInfo)

    dispatch({type: 'SET_FEATURED', value: chosenInfo})

    const container = document.getElementById('container')

    history.push('/details')

    container.style.height = "0"
    container.style.top = "-70px"

    setResultList([])
  },[dispatch, history])

  return (
    <Container id='container'>
      {resultList && resultList.map((item, key) => (
        item.media_type !== 'person' &&
          <div key={key} className="searchResults--item"
            onClick={() => handleClick(item.id, item?.media_type)}
          >
            {item.poster_path !==  null ?
              <img
                src={`https://image.tmdb.org/t/p/w300/${item.poster_path }`}
                alt={item.title}
              />
            :
              <span>{item.name || item.title}</span>
            }
          </div>
      ))}
    </Container>
  );
};

export default SearchResults
