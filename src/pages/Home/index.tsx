import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import MovieRow from '../../components/MovieRow'
import FeaturedMovie from '../../components/FeaturedMovie'

import TMDB from '../../services/TMDB'
import {FilmData} from '../../services/TMDB'

import { Container, List, Loading } from './styles'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  const [movieList, setMovieList] = useState<FilmData[]>([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    //get complet list
    const loadAll = async () => {
      let list = await TMDB.getHomeList()

      setMovieList(list)

      //get featured item
      let originals = list.filter(i => i.slug === 'originals')

      let chosen = undefined
      do{
        let randomChosen = Math.floor(Math.random() * originals[0].items.results.length - 1)

        chosen = originals[0].items.results[randomChosen]

      } while(chosen === undefined || null || chosen.id === 63174 )

      let chosenInfo =  await TMDB.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
      console.log('CHOSEN :', chosenInfo)

      dispatch({type: 'SET_FEATURED', value: chosenInfo})
    }
      loadAll()

  },[dispatch])

  return (
    <Container>
      {featuredData &&
       <FeaturedMovie item={featuredData} />
      }

      <List>
       {
         movieList.map((item, key) => (
           <MovieRow key={key}
              title={item.title}
              items={item.items}
              media={item.media}
           />
         ))
       }
      </List>

      {!featuredData &&
        <Loading>
          <img src="https://cdn.lowgif.com/full/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="Loading"/>
      </Loading>
      }
    </Container>
  );
};

export default Home
