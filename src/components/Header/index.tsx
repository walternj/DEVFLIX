import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Container, SearchForm, SearchIcon } from './styles';

const Header: React.FC = () => {
  const [blackheader, setBlackHeader] = useState(false)
  const [search, setSearch] = useState('')
  const history = useHistory()

  useEffect(() => {
    const input = document.getElementById('searchInput')
    input.addEventListener("focus", function () {
      setBlackHeader(true)
    });

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

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    alert('Submit Search')
  }

  return (
    <Container background={blackheader} >
      <img className="header--logo"
        src="https://fontmeme.com/permalink/200908/6f4370d71e0e7511ca088679fad14e1c.png" alt="Netflix"
        onClick={() => history.push("/")}
    />


      <SearchForm onSubmit={handleSubmit}>
        <input
          id="searchInput"
          placeholder=""
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
        <SearchIcon />
      </SearchForm>
      <div className="header--user">
        <a href="/">
          <img src="https://api.adorable.io/avatars/60/abott@adorable.png" alt="user"/>
        </a>
      </div>
    </Container>
  )
};

export default Header;
