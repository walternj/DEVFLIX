import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { Container, AddFavoriteIcon, RemoveFavoriteIcon } from './styles';

import { MyListState } from '../../store/reducers/types';

interface ButtonProps {
  onClick?: any
  itemID?: string | number

}

export interface MyList {
  List: {}
  myList?:[{
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
  }]
}

const AddButton: React.FC<ButtonProps> = ({onClick, itemID}) => {
  const myListState = useSelector<MyListState, MyListState>(state => state)

  const [mylist, setMylist] = useState(null)
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    setMylist(myListState)
    console.log('mylistState: ', mylist)
    if(mylist !== null || undefined) {
      if (mylist.myList !== undefined) {
        const itemIndex = mylist.myList.findIndex(item => item.id === itemID)
        itemIndex !== -1 ? setToggle(false) : setToggle(true)
      }
    }

  },[mylist, onClick, itemID, toggle, myListState])

  return (
    <Container onClick={onClick} >
      {toggle ? <AddFavoriteIcon /> : <RemoveFavoriteIcon />}
    </Container>
  );
};

export default AddButton;
