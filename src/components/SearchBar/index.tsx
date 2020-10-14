import React, { useState, useRef, useCallback, FormEvent } from 'react'

import SearchResults from '../SearchResults'

import { SearchForm, SearchIcon, CloseIcon } from './styles';

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('')
  const [toggleIcon, setToggleIcon] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()
    searchInputRef.current.focus()
    setSearch(searchInputRef.current?.value)

    if(search === '' && searchInputRef.current.value !== '') {
      setTimeout(() => {
        setToggleIcon(true)
      }, 400);

    }else {
     setTimeout(() => {
      searchInputRef.current.focus()
      setToggleIcon(false)
     }, 400);
    }
    searchInputRef.current.value = ''

  },[search])

  const handleInputOnBlur = useCallback(() => {
    setTimeout(() => {
      searchInputRef.current.value = ''

      if(document.hasFocus){
        setToggleIcon(false)

      } else {
        setToggleIcon(true)

      }
    }, 1000);

  },[])

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        ref={searchInputRef}
        id="searchInput"
        placeholder={search}
        autoComplete="off"
        autoCorrect="off"
        onBlur={handleInputOnBlur}

      />
      <button
        className="buttonContainer"
        onClick={handleSubmit}
        ref={buttonRef}
        //onBlur={handleOnBlur}

      >
        {toggleIcon
          ?<CloseIcon />
          :<SearchIcon />
        }
      </button>

      <SearchResults keyword={search}/>
    </SearchForm>
  );
};

export default SearchBar
