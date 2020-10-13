import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { Container, AddFavoriteIcon, RemoveFavoriteIcon } from './styles';

import { MyListState } from '../../store/reducers/types';

interface ButtonProps {
  onClick?: any
  itemID?: string | number

}

const AddButton: React.FC<ButtonProps> = ({onClick, itemID}) => {
  const {myList} = useSelector((state:MyListState) => state)

  const [mylist, setMylist] = useState(null)
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    setMylist(myList)
    console.log('mylistState: ', myList)
    if(mylist !== null || undefined) {
      const itemIndex = mylist.myList.findIndex(element => element.id === itemID)
      itemIndex !== -1 ? setToggle(false) : setToggle(true)
    }

  },[myList, onClick, itemID, mylist, toggle])

  return (
    <Container onClick={onClick} >
      {toggle ? <AddFavoriteIcon /> : <RemoveFavoriteIcon />}
    </Container>
  );
};

export default AddButton;
