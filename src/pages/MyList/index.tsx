import React, { useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MyListState } from '../../store/reducers/types';

import { Container, Content } from './styles'

const MyList: React.FC = () => {
  const mylistState = useSelector<MyListState, MyListState["myList"]>(state => state.myList)

  const [mylist, setMylist] = useState(null)

  useLayoutEffect(() => {
    setMylist(mylistState)
  },[mylistState])

  return (
    <Container>
      <Content>
      {mylist && mylist.myList.map(item => (
        <div key={item.id} className="mylist--item">
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
