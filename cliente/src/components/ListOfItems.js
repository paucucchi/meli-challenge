import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/styles/ListOfItems.scss';
import { getItems } from '../services';
import Item from './partials/Item';
import Breadcrumb from './common/Breadcrumb';
import Loader from './common/Loader';
import NotFoundMessage from './common/NotFoundMessage';
import { Helmet } from "react-helmet";

function ListOfItems() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const keyword = query.get('search');
  const [data, setData] = useState([]);
  const [dataIsEmpty, setDataIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const notFoundMessage = 'Lo sentimos, por el momento no tenemos ningún producto disponible para esta búsqueda.';

  useEffect(() => {
    setIsLoading(true);
    getItems(keyword).then(response => {
      setData(response);
      setDataIsEmpty(false);
      setIsLoading(false);
    })
    .catch(error =>{
      setDataIsEmpty(true);
      console.log(error);
    });
  }, [keyword]);

  const itemsList = data.length !== 0 && data.items.map(
    ({ id, title, price, picture, free_shipping, state }) => 
    <Item
      id={id}
      key={id}
      title={title}
      price={price}
      picture={picture}
      shipping={free_shipping}
      state={state}
    />
  );

  return (
    dataIsEmpty ? <NotFoundMessage message={notFoundMessage} /> :
    <>
      <Helmet>
        <title>Resultados de {keyword} - Meli Challenge</title>
        <meta name="description" content={`Productos disponibles para la búsqueda: ${keyword}`} />
      </Helmet>
      <div className="container">
        <Breadcrumb categories={data.categories} />
        <section className="main results">
          {isLoading ? <Loader /> : itemsList}
        </section>
      </div>
    </>
  );
}

export default ListOfItems;
