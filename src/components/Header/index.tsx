import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Container } from './styles';

const Header: React.FC = () => {
  const [blackheader, setBlackHeader] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  },[])

  return (
    <Container background={blackheader} >
      <img className="header--logo"
        src="https://fontmeme.com/permalink/200908/6f4370d71e0e7511ca088679fad14e1c.png" alt="Netflix"
        onClick={() => history.push("/")}
      />

      <div className="header--user">
        <a href="/">
          <img src="https://api.adorable.io/avatars/60/abott@adorable.png" alt="user"/>
        </a>
      </div>
    </Container>
  )
};

export default Header;
