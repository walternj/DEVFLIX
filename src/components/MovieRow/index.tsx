import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AiFillPlayCircle } from 'react-icons/ai'

import { Container, ListContainer, NavLeftIcon, NavRightIcon, } from './styles';

import TMDB, {FilmData} from '../../services/TMDB';

const MovieRow: React.FC<FilmData> = ({title, items, media}) => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x= 0
    }
    setScrollX(x)
  }

  const handletRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listWidth = items.results.length *150

    if ((window.innerWidth - listWidth) > x) {
      x = (window.innerWidth - listWidth) -60
    }
    setScrollX(x)
  }

  useEffect(() => {
    console.log('items', items.results)

  }, [items])

  const handleClick = async(id: number, media_type: string) => {
    let chosenMedia= media_type ? media_type : media
    console.log('MEDIA_TYPE :', chosenMedia)
    let chosenInfo =  await TMDB.getMovieInfo(id, chosenMedia)

    console.log('CHOSEN_ITEM :', chosenInfo)

    dispatch({type: 'SET_FEATURED', value: chosenInfo})

    history.push('/Details')
  }

  return (
    <Container>
      <h2>{title}</h2>

      <ListContainer>
        <div className="moviewRow--left"
          onClick={handleLeftArrow}
        >
          <NavLeftIcon />
        </div>
        <div className="movieRow--right"
          onClick={handletRightArrow}
        >
          <NavRightIcon/>
        </div>

        <div className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className="movieRow--item">
              <img
                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                alt={item.original_title}
              />

              <div className="movieRow--icon-container"
                onClick={() => handleClick(item.id, item?.media_type)}
              >
                <AiFillPlayCircle />
              </div>
            </div>
          ))}
        </div>
      </ListContainer>
    </Container>
  )
}

export default MovieRow;

