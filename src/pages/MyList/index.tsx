import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { MyListState } from '../../store/reducers/types';

import { Container, Content } from './styles'

const MyList: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  let myListState: MyListState
  myListState = useSelector<MyListState>(state => state.myList)

  const handleClick = useCallback((item) => {
    dispatch({type:'SET_FEATURED', value: item})
    history.push('/details')

  },[dispatch, history])

  return (
    <Container>
      <h1>My List</h1>
      <Content>
      {myListState?.myList && myListState?.myList.map(item => (
        <div key={item.id} className="mylist--item"
          onClick={() => handleClick(item)}
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

      </Content>
    </Container>
  );
};

export default MyList;
