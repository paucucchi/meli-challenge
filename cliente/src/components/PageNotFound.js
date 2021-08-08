import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NotFound.scss';

const PageNotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <h2>Oops!... Page not found</h2>
    <p>Lo sentimos, la página que busca no existe.</p>
    <Link to="/">
      Volver a inicio
    </Link>
  </div>
);

export default PageNotFound;
