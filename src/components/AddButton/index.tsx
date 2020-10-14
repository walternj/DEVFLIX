import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { Container, AddFavoriteIcon, RemoveFavoriteIcon } from './styles';

import { MyListState } from '../../store/reducers/types';

interface ButtonProps {
  onClick?: any
  itemID?: string | number

}

const AddButton: React.FC<ButtonProps> = ({onClick, itemID}) => {
  let myListState: MyListState
  myListState = useSelector<MyListState>(state => state.myList)

  const [toggle, setToggle] = useState(true)

  useEffect(() => {
      if(myListState?.myList) {
        const itemIndex = myListState.myList.findIndex(item => item.id === itemID)
        itemIndex !== -1 ? setToggle(false) : setToggle(true)

      }
  },[itemID, myListState])

  return (
    <Container onClick={onClick} >
      {toggle ? <AddFavoriteIcon /> : <RemoveFavoriteIcon />}
    </Container>
  );
};

export default AddButton;
