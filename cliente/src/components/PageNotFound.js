import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NotFound.scss';
import { Helmet } from "react-helmet";

const PageNotFound = () => (
  <>
    <Helmet>
      <title>Página no encontrada - Meli Challenge</title>
    </Helmet>
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops!... Page not found</h2>
      <p>Lo sentimos, la página que busca no existe.</p>
      <Link to="/">
        Volver a inicio
      </Link>
    </div>
  </>
);

export default PageNotFound;
