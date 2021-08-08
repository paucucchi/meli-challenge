import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../assets/styles/SearchBar.scss';
import logo from '../assets/images/meli-logo.png';
import searchIcon from '../assets/images/search-icon.png';

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setKeyword(e.target.value);
    setIsEmpty(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!keyword) {
      setIsEmpty(true);
      return;
    }
    history.push({pathname: '/items', search: `?search=${keyword}`});
  };

  const handleLinkHome = (e) => {
    document.title = 'Meli - Frontend Challenge';
    setKeyword('');
    setIsEmpty(false);
  };

  return (
    <header>
      <div className="container top-bar">
      <Link to="/" onClick={handleLinkHome}><img src={logo} className="logo" alt="Mercado Libre logo" /></Link>
      <form className="search-bar">
        <input 
          type="text"
          name="search"
          placeholder={isEmpty ? "Por favor, ingresar un texto de búsqueda" : "Nunca dejes de buscar"}
          className={isEmpty ? "error" : ""}
          onChange={handleChange}
          value={keyword}
        />
        <button type="submit" value="Submit" onClick={handleSubmit}> 
          <img src={searchIcon} className="search-icon" alt="Search icon" />
        </button>
      </form>
      </div>
    </header>
  );
}

export default SearchBar;
