import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"

import SearchBar from '../SearchBar'

import { Container, MyList } from './styles'

const logoUrl = "https://fontmeme.com/permalink/200908/6f4370d71e0e7511ca088679fad14e1c.png"

const Header: React.FC = () => {
  const [blackheader, setBlackHeader] = useState(false)

  const history = useHistory()

  useEffect(() => {
    const input = document.getElementById('searchInput')
    let inputFocus: boolean

    input.addEventListener("focus", () => {
      inputFocus = true
      setBlackHeader(true)
    });

    input.addEventListener('focusout', () => {
      inputFocus = false
      setBlackHeader(false)
    })

    const scrollListener = () => {
      if(window.scrollY > 10 || inputFocus) {
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
        src={logoUrl} alt="Devflix"
        onClick={() => history.push("/")}
    />

      <SearchBar />

      <div className="header--user">
        <a href="/">
          <img src="https://api.adorable.io/avatars/60/abott@adorable.png" alt="user"/>
        </a>
      </div>

      <MyList onClick={() => history.push("/mylist")} />
    </Container>
  )
};

export default Header
