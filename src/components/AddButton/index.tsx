import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { Container, AddFavoriteIcon, RemoveFavoriteIcon } from './styles';

import { MyListState } from '../../store/reducers/types';

interface ButtonProps {
  onClick?: any
  itemID?: string | number
}

const AddButton: React.FC<ButtonProps> = ({onClick, itemID}) => {
  const myListState = useSelector((state: MyListState) => state.myList)

  const [mylist, setMylist] = useState(null)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setMylist(myListState)
    if(mylist !== null) {
      const itemIndex = mylist.myList.findIndex(element => element.id === itemID)
      itemIndex !== -1 ? setToggle(false) : setToggle(true)
    }

    setMylist(myListState)
  },[myListState, onClick, itemID, mylist, toggle])

  return (
    <Container onClick={onClick} >
      {toggle ? <AddFavoriteIcon/> : <RemoveFavoriteIcon />}
    </Container>
  );
};

export default AddButton;
